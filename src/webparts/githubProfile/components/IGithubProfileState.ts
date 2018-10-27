import { GithubRepoData, GithubCommitHistory } from "../../../integration/IGithubDataProvider";

export interface IGithubProfileState {  
  fullName: string;
  githubUserName: string;
  repos: GithubRepoData[];
  commits: GithubCommitHistory[];
  loading: boolean;
} 