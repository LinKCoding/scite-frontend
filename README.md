# Scite

Scite ("Science-Note") is an app that provides students with the basic tools to break down a science article. Users can view the science article of the day or check back on archived articles to start a note. Users can always go back to edit their notes or delete the note if he/she so chooses. In taking notes, students can also add words to their lexicons. Ideally, students can derive the definition through context clues, but there is also a built in dictionary component for ease of searching.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Must have npm installed, this app was made with version 5.4.2, node version v6.11.2

### Installing

Make sure that you also set up the rails backend: https://github.com/LinKCoding/scite-backend. Otherwise you won't get any articles or be able to navigate due to user verification. (Check the link for instructions on how to set up backend)

Then:
```
$ yarn add
$ yarn start
```
Note: if you're also running the rails server locally there can be a conflict of ports. You can start the rails server first and let yarn take care of selecting another port or manually change it for either the rails server or for this app.

You can also check out: https://scite.herokuapp.com for an up and running demo.
Please note due to the time it takes for backend to start up after sleeping, the request may timeout. A simple refresh should solve the issue.


## Built With

* JavaScript
* React - bootstrapped with create-react-app
* Redux
* React-Router-Dom
* Draft-js
* Draft-js plugins
* Semantic
* Bing News API
* Owlbot (dictionary) API


## Authors

* Kenny Lin, check out other projects at https://github.com/LinKCoding

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to everyone who took the time to check out the site and gave feedback. Special thanks for my Flatiron cohort!
