 # Would You Rather Project
You created a web app that allows users to play the "Would You Rather?"  in the "Would You Rather?" Project. The rules of the game are as follows: "Would you rather [option A] or [option B]?" is the question posed to the user. It is against the rules to answer "neither" or "both."

Users will be able to answer questions, see which questions they haven't yet answered, check how other people are voting, add questions, and see how their position on the leaderboard in your app.

# To get started 

* install all project dependencies with `npm install`
* start the development server with `npm start`
* open your browser at port 3000 with the address: http://localhost:3000

## Task lists 







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





