export interface Book {
  book_id: number,
  isbn: string,
  cover?:string,
  title:string,
  synopsis?:string,
  publish_date:Date,
  publisher_id:number,

  publisher_name?:string,

  author_ids?:string,
  author_names?:string,

  genre_ids?:string,
  genre_names?:string,

  avg_rating?:number,
  ratings?:number
}
