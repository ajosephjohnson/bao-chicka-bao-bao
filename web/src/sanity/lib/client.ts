import {createClient} from 'next-sanity';
import {dataset, projectId} from '../../../env';

export const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2025-02-19',
})