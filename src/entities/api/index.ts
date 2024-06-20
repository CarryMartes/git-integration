import {FetchParams} from "@/shared";

const DOMAIN_PREFIX = "https://api.github.com";

const Api = {
    REPOS: (username: string) => `/users/${username}/repos`,
    COMMITS: (repo: string, username: string) => `/repos/${username}/${repo}/commits`
};


export const getRepos = async (username: string) => {
    return fetch(DOMAIN_PREFIX + Api.REPOS(username), {
        cache: 'no-cache',
        next: {
            tags: ['repos']
        },
        headers: FetchParams.Headers
    }).then((res) => res.json());
}

export const getCommits = (repoName: string, username: string) => {
    return fetch(DOMAIN_PREFIX + Api.COMMITS(repoName, username), {
        cache: 'no-cache',
        next: {
            tags: ['commits']
        },
        headers: FetchParams.Headers
    }).then((res) => res.json());
}
