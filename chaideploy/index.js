const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const githubData = {
    "login": "Sonikm",
    "id": 117334722,
    "node_id": "U_kgDOBv5iwg",
    "avatar_url": "https://avatars.githubusercontent.com/u/117334722?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sonikm",
    "html_url": "https://github.com/Sonikm",
    "followers_url": "https://api.github.com/users/Sonikm/followers",
    "following_url": "https://api.github.com/users/Sonikm/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sonikm/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sonikm/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sonikm/subscriptions",
    "organizations_url": "https://api.github.com/users/Sonikm/orgs",
    "repos_url": "https://api.github.com/users/Sonikm/repos",
    "events_url": "https://api.github.com/users/Sonikm/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sonikm/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Soni Kumari",
    "company": null,
    "blog": "https://sonikm.github.io/My-Portfolio.github.io/",
    "location": "New Delhi, India",
    "email": null,
    "hireable": null,
    "bio": "Frontend Web Developer\r\n",
    "twitter_username": "Sonikumari443",
    "public_repos": 59,
    "public_gists": 0,
    "followers": 95,
    "following": 12,
    "created_at": "2022-11-03T04:59:14Z",
    "updated_at": "2024-08-25T17:05:30Z"
    }


    app.get('/github', (req, res) => {
        res.json(githubData);
    })


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("This is twitter page...");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
