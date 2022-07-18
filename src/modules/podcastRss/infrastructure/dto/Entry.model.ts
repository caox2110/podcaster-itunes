import { GenericAttributes } from '.';

export interface Entry {
  id: GenericAttributes;
  title: GenericAttributes;
  summary: GenericAttributes;
  'im:artist': { [key: string]: GenericAttributes };
  'im:image': { [key: string]: GenericAttributes };
}
