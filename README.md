# Flixxit
- Capstone project for Knowledge Hut
- App deployed to [https://flixxit-server.vercel.app/login](https://flixxit-server.vercel.app/login)

## Instructions to run
### Start back end
  1. Go to directory where you cloned the Git Repository
  2. Go to driectory \flixxit\server
  3. Type NPM start

### Start front end
  1. Go to directory where you cloned the Git Repository
  2. Go to driectory \flixxit\app
  3. Type NPM start

## Site Functionality
  ### Login / Sign Up
  - On the login screen you can login if you have a existing account, if you don't you can click on the sign up button which will take you the sign in page.
  - Create a new account by entering a username, email, and password. Your email will be your login in name. After you sign up you will be brough back to the login page.
  - When logged in a token is generated and stored in the localstorage for server authetication

  ### Main Dashboard  
  - On the main dash board you see a list of popular and top rated movies/tv. Clicking on a picture will bring you to a page with more information. You can scroll the carosuel by clicking on the arrows. You can navigate to the other pages via the header.

  ### Title Page
  - Clicking on a picture will bring you to the title page, which is has info taking from the themoviedb.org API. Here you can navigate to home page, or add to your personal watchlist by clicking on "add to watchlist".
  - You can rate the movie\tv show by clicking on thumbs. The number presists among all users for the site. You can also watch a trailer by clicking on the play button.
  - There are 4 trailers uploaded with the project and a random one is selected everytime you go to the title page. 
     
  ### Search Page
  - Type in a movie or tv show title into the search bar and press "enter" or click on the search icon to search the api for related movies.
  - Clicking on the poster will take you the title page

  ### Watch List
  - Any movie or tv show that you click "add to watchlist" on the title page will be displayed here. Clicking on the poster will send you back to the title page.
  - You can click on the remove button to remove that title from your watch list

  ### Subscription
  - Page that takes you though the mock checkout process for a new subscription
  - Clicking on ether sign up button will take you though the process and end at the thank you for your order screen

  ### Profile
  - Any titles you clicked on to navigate to the title page will be automatically added to the recently viewed carousel, this carousel will display the last 10 titles you viewed
  - The movies and tv recommedations are based on the newest movie or tv show in your recently viewed carosel

  ### About us
  - Generic about us screen with some made up infomation

  ### Logging out
  - Clicking log out will bring you back to the login screen and wipe local storage for tokens and info. 
