export interface Opinion {
  opinion_id: number;
  rating?: number;
  review?: string;
  opinion_create: Date;
  opinion_update?: Date;
  book_id: number;
  title?: string;
  cover?: string;
  user_: string;
}
