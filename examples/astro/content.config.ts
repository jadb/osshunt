import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { schemas } from '../../lib/schemas.mjs';

// Copy into the future site's src directory and adjust these relative paths.
export const collections = {
  categories: defineCollection({ loader: file('data/collections/categories.json'), schema: schemas.categories(z) }),
  products: defineCollection({ loader: file('data/collections/products.json'), schema: schemas.products(z) }),
  alternatives: defineCollection({ loader: file('data/collections/alternatives.json'), schema: schemas.alternatives(z) }),
};
