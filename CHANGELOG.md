#### v 1.0.0-RC     	====	17/07/2020

#### v 0.0.7-SNAPSHOT	====	10/07/2020

#### v 0.0.6-SNAPSHOT	====	03/07/2020

- Front: 
    - User Create Edit Delete Book Rating-Review
    - No login required for navigation
    - Genres Detail
    - Publisher Detail
    - Book Grid
    - Top-5 Books By Genre
    - Book Home table-grid switch
    - Book Card small and medium
    - Genre Ontimze Service
    - Order Book Grid by avg Rating
    - Fix all site navigation
    - Lituralia logo on login
    - Remove al C_UD operations from tables and forms
    - Publishers Home design
- Back:
    - genre-book service
    - replace credentials with environment variables
- SQL:
    - Default value for opinion creation date

#### v 0.0.5-SNAPSHOT	====	26/06/2020

- Front:
    - Book detail
        - List of reviews
    - Author Home
        - Average Rating of Books
    - Author Detail
        - Average Rating of Books
        - List of Books
    - Genres Home
    - Publishers Home
    - StarRating Pipe / Visual Ratings (star png)
    - O Table Cell Renderer Image StarRating
- SQL 
    - Added Portrait and biography to Authors
    - New View v_author_ratings
    - New View v_author_details
- Back 
    - Sub-Services using new Views
        

#### v 0.0.4-SNAPSHOT	====	19/06/2020

- Front:
    - Book detail: 
        - Cover img
        - Publisher dropdown
        - Genres table
        - Authors table
        - Fix insert Book
- Back:
    - Endpoint moved to /api (url collision with front)
    - Opinion service
- Maven:
    - Profile: 
        build_frontend => cleans and rebuilds npm frontend

#### v 0.0.3-SNAPSHOT	====	12/06/2020

- SQL: 
    - Book details View
    - Update column type of base64 images
- Back: (with postman requests)
	- Genre Service
	- Author Service
	- Publisher Service
	- Book-Author sub-service
	- Book-genre sub-service
- Front: 
	- Books table with named foreign 
		references, filters and search 
		(authors, genres and publisher name)
- Packaging auto-deploy front in spring uber-jar
- This new CHANGELOG.md
- Update README.md


#### v 0.0.2-SNAPSHOT	====	06/06/2020

- Frontend init
- User login
- Front: Table of Books


#### v 0.0.1-SNAPSHOT	====	29/05/2020

- Backend init
- Back: Book Service (with postman requests)
- SQL squema
- Mockups
