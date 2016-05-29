# GitHUD

UI for viewing a company's GitHub repos

# Setup
1. Clone this repo
2. Open `app/index.html` in your browser of choice

# Tests
In order to run the specs:

1. Run `npm install` in the cloned directory
2. Run `./node_modules/karma/bin/karma start` _[This will launch a browser window as part of the process]_


# To do
~~- Flash message/error reporting~~
- Allow data refresh on click
- Search on org input
- Cache for previously searched orgs/repos
- Spinners during data fetch
- Filter data stored in memory from API for scalability [this app doesn't utilize anywhere close to all the data it's retaining]
- Lazy load/infinite scroll for scalability
- Allow live polling option
- Styling
