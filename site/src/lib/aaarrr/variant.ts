/**
 * Experiment variants on pages: a page names its experiment
 * (`tracking.experimentId`, the GrowthBook flag key), the server renders the
 * control, and the ABTest island reads the visitor's assigned value from the
 * browser SDK (`window.aaarrr.features`, evaluated by the stack's API in the
 * brand's own GrowthBook project).
 *
 * Anti-flicker: the control is the page's own content, server-rendered for
 * everyone (crawlers, visitors without analytics consent, a failed flags
 * request). The API evaluates the flags only after consent, so the assigned
 * variation replaces the control once, when the flags load: right after
 * hydration for a visitor who consented earlier, on the consent itself for a
 * new one. Nothing is hidden while waiting and the page never switches back.
 *
 * Exposure: reading the loaded value from the SDK (followAssignment, as the
 * island shows it) is what records the visitor as exposed: the SDK reports
 * the experiment and variation to the API, once per assignment per tab
 * session. Loading the flags records nothing, and a control kept because the
 * flags never load (no consent, a failed request) is never reported.
 */

/** Value of the control: the page's own content. */
export const CONTROL = 'control';

/** What the SDK knows of one flag for the visitor. */
export interface Assignment {
    /** The flags are loaded (or never will be: no SDK on the page). */
    ready: boolean;
    /** The flag's value; CONTROL until loaded or without the flag. */
    value: unknown;
}

type FeaturesApi = { getValue?: (key: string, fallback: unknown) => unknown; ready?: boolean };
type PageGlobals = { aaarrr?: { features?: FeaturesApi } };

/**
 * The visitor's value of featureKey from the stack SDK, once its flags are
 * loaded (after analytics consent). Without the SDK, the control.
 *
 * `window.growthbook` is not a source: aaarrr.js defines it as a shim over
 * these same flags, present from the start, answering the fallback until
 * they load and carrying no ready state.
 */
export function assignedValue(globals: unknown, featureKey: string): Assignment {
    const g = (globals ?? {}) as PageGlobals;
    if (!g.aaarrr) return { ready: true, value: CONTROL };
    const features = g.aaarrr.features;
    if (features?.ready !== true || typeof features.getValue !== 'function') return { ready: false, value: CONTROL };
    return { ready: true, value: features.getValue(featureKey, CONTROL) ?? CONTROL };
}

/**
 * Follows the visitor's value of featureKey for an island: reports it now,
 * then every `every` ms until the flags are loaded, then stops (the
 * assignment is stable for the visitor). The one read of the loaded value is
 * the SDK's cue to record the exposure. Flags that never load (no consent, a
 * failed request) keep the control and record nothing. Returns the function
 * that stops it.
 */
export function followAssignment(
    globals: () => unknown,
    featureKey: string,
    onValue: (value: unknown) => void,
    every = 500,
): () => void {
    const check = () => {
        const { ready, value } = assignedValue(globals(), featureKey);
        onValue(value);
        return ready;
    };
    if (check()) return () => {};
    const interval = setInterval(() => {
        if (check()) clearInterval(interval);
    }, every);
    return () => clearInterval(interval);
}

/**
 * The headline a hero shows for its experiment's value: the assigned
 * variation's value when it is text (the variation carries the headline it
 * tests), else the page's own headline (control, not assigned yet, no
 * consent, a value that is not text).
 */
export function headlineFor(value: unknown, control: string): string {
    if (typeof value !== 'string') return control;
    const text = value.trim();
    return text === '' || text === CONTROL ? control : text;
}
