export const MAX_CHECKPOINT_BYTES = 512 * 1024;
export function serializedCheckpoint(state, limit = MAX_CHECKPOINT_BYTES) {
  const serialized = JSON.stringify(state);
  if (new TextEncoder().encode(serialized).byteLength > limit) {
    throw Object.assign(new Error('Pricing inventory exceeds checkpoint storage limit'), {
      code: 'archive_incomplete',
    });
  }
  return serialized;
}
