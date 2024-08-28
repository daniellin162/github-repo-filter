# github-repo-filter

### Search for GitHub repositories created between two dates

This Node.js script allows you to search for the GitHub repositories with the most stars created between two dates and outputs to the CLI. It uses the GitHub REST API, the Octokit client library, and moment.js.

## Features
* Enter a start and end date to search between (defaults to today for both if not provided)
* Repositories are sorted by stars or another field like forks
* Prints out the repo name and number of stars/forks
* Handles pagination of results behind the scenes for large result sets

## Usage
Install dependencies:

`npm install`

Run the script:

`node index.js <start-date> <end-date> <sort> <order> `

`node index.js 2020-01-01 2020-06-01 forks desc`
