import { IGithubDataProvider, GithubSummary } from "./IGithubDataProvider";
export declare class GithubAPIProvider implements IGithubDataProvider {
    UserData(githubUser: string): Promise<GithubSummary>;
    private CommitHistory(githubUser);
    private ReposForUser(githubUser);
}
