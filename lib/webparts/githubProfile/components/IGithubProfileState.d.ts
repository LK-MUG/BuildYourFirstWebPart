import { GithubRepoData, GithubCommitHistory } from "./IGithubDataProvider";
export interface IGithubProfileState {
    fullName: string;
    githubUserName: string;
    repos: GithubRepoData[];
    commits: GithubCommitHistory[];
}
