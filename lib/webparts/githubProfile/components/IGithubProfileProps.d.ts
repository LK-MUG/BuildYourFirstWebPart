import { IGithubDataProvider } from "./IGithubDataProvider";
export interface IGithubProfileProps {
    githubUserName: string;
    userFullName: string;
    githubDataProvider: IGithubDataProvider;
}
