# GitHUD #

UI built with Angular 1.4.5 for viewing a company's GitHub repos.

By default, the app starts with the organization set to Netflix, with its repos sorted by the number of forks in decreasing order.

#### Features: ####
- Change organization by clicking the edit icon next to the current name. Click the refresh icon to load repos for the organization.
- View any listed repo on github 
- Sort repos by any category. Click a second time to reverse order
- View commits (including message, author and link to GitHub) for a repo by clicking on the row
- Manually refresh repo data for most current info by clicking the refresh icon

## Setup ##
1. Clone this repo
2. Open `app/index.html` in your browser of choice

## Tests ##
This app uses [Karma](https://karma-runner.github.io/0.13/intro/installation.html) and [Jasmine](http://jasmine.github.io/).
In order to run the specs:

1. Run `npm install` in the cloned repo's root directory (`GitHUD/`)
2. Run `./node_modules/karma/bin/karma start` _[This will launch a browser window as part of the process]_


### To do ###
- ~~Flash message/error reporting~~
- ~~Allow data refresh on click~~
- Search on org input
- Cache for previously searched orgs/repos
- Spinners during data fetch
- Filter data stored in memory from API for scalability [this app doesn't utilize anywhere close to all the data it's retaining]
- Lazy load/infinite scroll for scalability
- Allow live polling option
- Styling
