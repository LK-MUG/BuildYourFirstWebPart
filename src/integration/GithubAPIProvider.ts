import { IGithubDataProvider, GithubRepoData, GithubCommitHistory, GithubSummary } from "./IGithubDataProvider";

export class GithubAPIProvider implements IGithubDataProvider {
  public ReposForUser(githubUser: string): Promise<GithubRepoData[]> {
    return new Promise<GithubRepoData[]>((resolve, reject) => {
      resolve([]);    
    });
  }  
  
  public UserData(githubUser: string): Promise<GithubSummary> {
    return new Promise<GithubSummary>((resolve, reject) => {
      let result = {commits: null, repos: null};
      this.ReposForUser(githubUser).then((repos) => {
        result.repos = repos;
        if (result.commits != null && result.repos != null)
          resolve(result);
      }).catch((error) => reject(error));
      this.CommitHistory(githubUser).then((commits) => {
        result.commits = commits;
        if (result.commits != null && result.repos != null)
          resolve(result);
      }).catch((error) => reject(error));
    });
  }
  
  public CommitHistory(guthubUser: string): Promise<GithubCommitHistory[]> {
    return new Promise<GithubCommitHistory[]>((resolve, reject) => {
      resolve([]);    
    });
  }


}