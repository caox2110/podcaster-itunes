interface Author extends String {
  label: string;
  attributes: any;
}

export interface PodcastRss {
  id: number;
  title: string;
  image: string;
  summary?: string;
  author: Author;
}
