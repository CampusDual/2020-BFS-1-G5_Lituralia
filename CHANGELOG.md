#### v 1.0.0-RC.2     	====	16/07/2020

- Small optimizations on Author and Publisher Card layout
- Small optimizations on Book List and Review List

#### v 1.0.0-RC.1     	====	15/07/2020

- Front:
    - Book, Author and Publisher Services
    - Rate books clicking on stars (remove dropdown)
    - Deprecated png-based star rating pipe    
    - Logo on menu
    - Book Grid Landing Page
    - Dynamic Star Rating
    - Optimize Card Layouts
- SQL:
    -Real-ish mock data

#### v 0.0.7-SNAPSHOT	====	10/07/2020

- Front:
    - Simple Login Guard for User Section
	- Sort and filter books by avg_rating
	- Revamp OTableCellRendererStarRating Component
	- Sort and filter authors by avg_rating
	- Sort and filter publishers by avg_rating
	- Show publisher`s avg rating on list and detail
	- Create Opinion module
	- Extract Opinion display to its own component
	- Sort reviews by rating (book detail)
    - Publishers Home design
    - Publishers grid-table switch
    - Genres top_grid - table switch
	- Author Detail: Display all reviews of author's books
	- Publisher Detail: Display all reviews of publisher's books
	- Refresh Book Detail on Review Submit-Mod-Remove
	- UserModule Init
	- User/Timeline (list of all user's reviews)
	- User My Books List:
		- Remove book from my list
		- Display personal Book List
	- Book detail:
	    - Add and remove books to/from my list
	- Base64 pipe for images
	- StarImage Component fix width and height
	- Author Card Mini (on book detail)
	- Fix Book Card Small (vertical)
	- Front end shared/domain
    - Book Cover on Author and Publisher reviews 
    - Add "Bookmark" Button to Book Card mini (genres top) 
    - Sign In Feature-Module
    - Logged-out Guard
    - Sort reviews by date
    - Decouple my-lists into my-list.service.ts
    - Cleanup menu login and logout buttons
- Back: 
	- Publishers Rating Service
	- Opinion Service: 
		- vAuthorOpinionsQuery,
		- vPublisherOpinionsQuery,
		- vBookOpinionsQuery
	- User Sign In Service
 -SQL: 
	- Publishers Rating View
	- SQL views optimizations
	- My private list initialization trigger on user sign up
	- Mod table opinion: change dates to timestamps
	- Mod table lists: change dates to timestamps
	- Triggers:
		- Auto update modification date on opinions UPDATES
		- Auto update modification date on lists UPDATES
		- Auto update modification date on list_books CREATE, UPDATE, DELETE
		- Auto initialize personal list on user creation
		
		
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
