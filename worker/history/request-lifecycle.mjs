// Keep bounded metadata reservations alive when the client connection closes.
export function preserveHistoryRequest(work, context) {
  const response = Promise.resolve().then(work);
  context.waitUntil(response.then(() => undefined, () => undefined));
  return response;
}
