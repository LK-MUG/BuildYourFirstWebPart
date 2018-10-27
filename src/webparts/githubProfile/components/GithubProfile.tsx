import * as React from 'react';
import styles from './GithubProfile.module.scss';
import { IGithubProfileProps } from './IGithubProfileProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IGithubProfileState } from './IGithubProfileState';

export default class GithubProfile extends React.Component<IGithubProfileProps, IGithubProfileState> {

  constructor(props: IGithubProfileProps) {
    super(props);

    this.state = {
      fullName: '', 
      githubUserName: '',
      commits: [],
      repos: [],
      loading: false
    };

    this.loadGithubData = this.loadGithubData.bind(this);
  }

  private loadGithubData() {

  }

  public componentDidMount(): void {
    // has to be here to spawn a spy.
  }

  public componentWillMount() : void {
    if (this.state.githubUserName != this.props.githubUserName) {
      this.setState( {fullName: this.props.userFullName, githubUserName : this.props.githubUserName, commits: null, repos: null });
      this.loadGithubData();
    }
  }

  public render(): React.ReactElement<IGithubProfileProps> {
    return (
      <div className={styles.githubProfile}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span id='header' className={styles.title}>Github information for {escape(this.props.userFullName)}</span>
              <p className={styles.subTitle}>Github repositories</p>
              <p className={styles.description}>
                {this.state.loading ? <span>"Loading..."</span> : 
                  this.state.repos ? this.state.repos.map((repo) => <span>{escape(repo.repoName)} <br/></span>): <span>None</span>}
              </p>
              <p className={styles.subTitle}>Commit history</p>
              <p className={styles.description}>
                {this.state.loading ? <span>"Loading..."</span> : 
                  this.state.commits ? this.state.commits.map((commit) => <span>{commit.commitDate}: {commit.numberOfCommits} <br/></span>): <span>None</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
