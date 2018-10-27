import { IGithubDataProvider, GithubRepoData, GithubCommitHistory } from "./IGithubDataProvider";
export declare class GithubAPIProvider implements IGithubDataProvider {
    ReposForUser(githubUser: string): Promise<GithubRepoData[]>;
    CommitHistory(guthubUser: string): Promise<GithubCommitHistory[]>;
}
