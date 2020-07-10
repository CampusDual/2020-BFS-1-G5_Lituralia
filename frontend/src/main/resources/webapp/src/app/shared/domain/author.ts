export interface Author {
    author_id: number,
    author_name: string,
    author_portrait?: string,
    author_birth?: Date,
    author_death?: Date,
    author_bio?: string,

    avg_rating?:number,
    ratings?:number
}