import test from 'node:test';
import assert from 'node:assert/strict';
import {addSixMonths,historicalAnchors,selectAtOrBefore} from '../lib/pricing/calendar.mjs';
test('calendar months clamp UTC end dates and preserve time',()=>{assert.equal(addSixMonths('2023-08-31T12:13:14.000Z'),'2024-02-29T12:13:14.000Z');assert.equal(addSixMonths('2024-08-31T00:00:00Z'),'2025-02-28T00:00:00.000Z');});
test('anchors independent of screenshots, lookup bounded and no future',()=>{const records=[{capturedAt:'2020-01-31T00:00:00Z'},{capturedAt:'2021-01-30T00:00:00Z'}];assert.deepEqual(historicalAnchors(records,'2021-02-01T00:00:00Z'),['2020-01-31T00:00:00.000Z','2020-07-31T00:00:00.000Z','2021-01-31T00:00:00.000Z']);assert.equal(selectAtOrBefore(records,'2020-03-02T00:00:00Z'),null);assert.equal(selectAtOrBefore(records,'2021-01-31T00:00:00Z'),records[1]);});
