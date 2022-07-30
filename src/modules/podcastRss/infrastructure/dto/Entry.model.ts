import { GenericAttributes } from '.';

export interface Entry {
  id: GenericAttributes;
  title: GenericAttributes;
  summary: GenericAttributes;
  link: GenericAttributes;
  category: GenericAttributes;
  'im:name': GenericAttributes;
  'im:price': GenericAttributes;
  'im:artist': GenericAttributes;
  'im:image': GenericAttributes[];
  'im:contentType': GenericAttributes;
  'im:releaseDate': GenericAttributes;
}
