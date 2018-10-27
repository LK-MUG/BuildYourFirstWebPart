
export interface GithubRepoData {
  repoName: string;
  isForked: boolean;
  lastCommit: Date;
}

export interface GithubCommitHistory {
  commitDate: Date;
  numberOfCommits: number;
}

export interface GithubSummary {
  commits: GithubCommitHistory[];
  repos: GithubRepoData[];
}

export interface IGithubDataProvider {
  UserData(githubUser: string): Promise<GithubSummary>;  
}