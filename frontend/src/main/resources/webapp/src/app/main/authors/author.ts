export interface Author {
    author_id: number,
    author_name: string,
    author_portrait: string,
    author_birth: Date,
    author_death: Date,

    avg_rating?:number,
    ratings?:number
}