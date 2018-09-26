## JS Project Proposal: Park-King

### Background

Craxi (Crazy + Taxi) is a simple game of driving simulation. User always starts with a taxi running on the road when the game begins. During the game, the user tries to stay away from other cars on the road for as much time as possible. Taxi follow these rules:

1) Taxi starts from an initial speed of 30mph and accelerates at a constant rate.
2) Each second the taxi stays on the road counts 2 points towards the user's score.
3) User have 3 only chances to honk at the closest car in the front. When being honked at, another car would move to another lane.
4) Game is over when the user's taxi collides with another car.

### Functionality & MVP

In Craxi, users will be able to:

- [ ] Start the game in the initial screen & pause the game in progress, which lets the user resume, restart or exit the game.
- [ ] Check scoreboard for high scorers.
- [ ] Control taxi by using left and right arrow keys.
- [ ] Honk at the closest car in the front by using space key.

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

This app will consist of a single screen with game control button, game board, nav links to the Github, my LinkedIn, the About modal and scoreboard.
1) On the top, both the About modal and game control button will lead to pop-up modals that provides simple introduction and instructions of the game respectively.
2) On the left, a scoreboard will be present to show the top 8 players with their scores (and user's ranking?).
3) On the right, there will be three (or more) links to my professional profiles.


### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- _________ for effects rendering,
- __________ to bundle js files.

In addition to the entry file, there will be three scripts involved in this project:

`road.js`: this script will handle the logic for creating and updating the necessary `Foo.js` elements and rendering them to the DOM.

`movement.js`: this script will handle the logic behind the scenes.  An Automata object will hold a `type` (hexagon, triangle, or square) and a 2D array of `Cell`s.  It will be responsible for doing neighbor checks for each `Cell` upon iteration and updating the `Cell` array appropriately.

`car.js`: this lightweight script will house the constructor and update functions for the `Cell` objects.  Each `Cell` will contain a `type` (hexagon, triangle, or square) and an `aliveState` (`true` or `false`).

### Implementation Timeline


### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] User gets extra points if the taxi changes lane in a close margin.
- [ ] If the car being honked at collides with another car while changing lane, user's score will be deducted and game screen slows down with sad music.
