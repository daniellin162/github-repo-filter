const { Octokit } = require("@octokit/core");
const moment = require("moment");

const octokit = new Octokit();
const sDate = process.argv[2];
const eDate = process.argv[3];
const sort = process.argv[4] || 'stars';
const order = process.argv[5] || 'desc';


async function getPopularReposDate(since, until) {

    const query = `created:>${since} created:<${until}`;

    const res = await octokit.request('GET /search/repositories', {
        q: query,
        sort: sort,
        order: order
    });

    for (let repo of res.data.items) {
        console.log(repo.name, ' - ', repo.stargazers_count, sort);
    }

}

const since = moment(sDate).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD');
const until = moment(eDate).format('YYYY-MM-DD') || moment().format('YYYY-MM-DD');

getPopularReposDate(since, until);