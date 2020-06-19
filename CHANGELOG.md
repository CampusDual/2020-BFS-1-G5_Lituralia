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