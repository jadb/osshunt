import { createHash } from 'node:crypto';

export async function runLoader(loader, item) {
  const entries = new Map();
  await loader.load({
    store: {
      clear: () => entries.clear(),
      set: entry => {
        if (entries.has(entry.id)) throw new Error(`duplicate entry: ${entry.id}`);
        entries.set(entry.id, entry);
        return true;
      },
    },
    parseData: async ({ data }) => item.parseAsync(data),
    generateDigest: data => createHash('sha256').update(JSON.stringify(data)).digest('hex'),
  });
  return [...entries.values()].map(x => x.data);
}
