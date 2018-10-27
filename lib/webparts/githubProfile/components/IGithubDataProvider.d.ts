export interface GithubRepoData {
    repoName: string;
    isForked: boolean;
    lastCommit: Date;
}
export interface GithubCommitHistory {
    commitDate: Date;
    numberOfCommits: number;
}
export interface IGithubDataProvider {
    ReposForUser(githubUser: string): Promise<GithubRepoData[]>;
    CommitHistory(guthubUser: string): Promise<GithubCommitHistory[]>;
}
