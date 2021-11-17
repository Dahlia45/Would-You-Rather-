 # Would You Rather Project
You created a web app that allows users to play the "Would You Rather?"  in the "Would You Rather?" Project. The rules of the game are as follows: "Would you rather [option A] or [option B]?" is the question posed to the user. It is against the rules to answer "neither" or "both."

Users will be able to answer questions, see which questions they haven't yet answered, check how other people are voting, add questions, and see how their position on the leaderboard in your app.

# To get started 

* install all project dependencies with `npm install`
* start the development server with `npm start`
* open your browser at port 3000 with the address: http://localhost:3000

## Example:

 ### Login / Logout page
<img width="1440" alt="Screen Shot 2021-11-17 at 3 18 12 AM" src="https://user-images.githubusercontent.com/92329244/142095100-c80a8457-5660-4c4c-a3f0-9f2335b5ae7f.png">

<img width="305" alt="Screen Shot 2021-11-17 at 3 21 56 AM" src="https://user-images.githubusercontent.com/92329244/142095517-f6151791-c15c-4a71-9892-9125e353780e.png">

 ### Home page 
<img width="1440" alt="Screen Shot 2021-11-17 at 3 18 40 AM" src="https://user-images.githubusercontent.com/92329244/142096121-f1a3b491-3077-4dd4-8b1b-98c62231f9c6.png">

 ### Error page 
 
 <img width="1440" alt="Screen Shot 2021-11-17 at 3 35 32 AM" src="https://user-images.githubusercontent.com/92329244/142095632-bf693c9b-8e05-4afa-8256-5f24101af911.png">

 ### UnAnswered question 

<img width="779" alt="Screen Shot 2021-11-17 at 3 19 54 AM" src="https://user-images.githubusercontent.com/92329244/142096181-650a124c-9251-49e9-af8b-a9e27bf92746.png">

 ### Answered question 
 
<img width="781" alt="Screen Shot 2021-11-17 at 3 20 45 AM" src="https://user-images.githubusercontent.com/92329244/142095932-65f90fd3-2b3c-4f8f-a47d-5aab92e3bde5.png">

 ### New question 
 <img width="692" alt="Screen Shot 2021-11-17 at 3 21 14 AM" src="https://user-images.githubusercontent.com/92329244/142096327-21d1a9e2-1e52-48cb-bbf1-db590e86467d.png">

 
 ### Leader board 
 <img width="739" alt="Screen Shot 2021-11-17 at 3 21 34 AM" src="https://user-images.githubusercontent.com/92329244/142096334-93463c7b-c2be-4165-8558-46c6268e273f.png">

 
 
 ## Task lists 
### main

- [x] the home page have answered and unanswered polls
- [x] user can alternate between viewing answered and unanswered polls.
- [x] the user can navigate to the leaderboard.
- [x] Upon voting in a poll, all of the information of the answered poll is displayed
- [x] The user can navigate to the form that allows the user to create a new poll.
- [x] The form is available at/add.
- [x] The Leaderboard is available at/leaderboard.

### displayed information

- [x] The details of the poll are available at questions/:question_id.
- [x] For answered polls, each of the two options contains the following:
      * the text of the option.
      * the number of people who voted for that option.
      * the percentage of people who voted for that option.
- [x] The application asks the user to sign in and shows a 404 page if that poll does not exist.

### Architecture

- [x] inputs and controlled components may have some state handled by the component.
- [x] Updates are triggered by dispatching action creators to reducers.
- [x] There are no direct API calls in the components' lifecycle methods.





