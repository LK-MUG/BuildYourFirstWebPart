import { IGithubDataProvider, GithubSummary } from "./IGithubDataProvider";
export declare class GithubAPIProvider implements IGithubDataProvider {
    private config;
    constructor();
    UserData(githubUser: string): Promise<GithubSummary>;
    private CommitHistory(githubUser);
    private ReposForUser(githubUser);
}
