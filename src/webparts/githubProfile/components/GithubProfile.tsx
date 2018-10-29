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
      events: [],
      repos: [],
      loading: false
    };

    this.loadGithubData = this.loadGithubData.bind(this);
  }

  private loadGithubData() {
    this.props.githubDataProvider.UserData(this.props.githubUserName).then((userInfo) =>
      this.setState({ ...this.state, repos: userInfo.repos, events: userInfo.events, loading: false })
    );
  }

  public componentDidMount(): void {
    // has to be here to spawn a spy.
  }

  public componentDidUpdate() : void {
    if (this.state.githubUserName != this.props.githubUserName) {
      this.setState( {fullName: this.props.userFullName, githubUserName : this.props.githubUserName, loading: true, events: null, repos: null });
      this.loadGithubData();
    }
  }

  public render(): React.ReactElement<IGithubProfileProps> {
    let repoCounter = 0;
    let eventCounter = 0;
    return (      
      <div className={styles.githubProfile}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span id='header' className={styles.title}>Github information for {escape(this.props.userFullName)}</span>
              <p className={styles.subTitle}>Github repositories created</p>
              <p className={styles.description}>
                {this.state.loading ? <span>Loading...</span> : 
                  this.state.repos ? this.state.repos.filter((repo) => !repo.isForked).map((repo) => <span key={++repoCounter} id={"repo"+repoCounter}>{escape(repo.repoName)} <br/></span>): <span>None</span>}
                  {!this.state.loading ? <span id='forkCount'><br/>Additionally, {this.state.fullName} has forked {this.state.repos.filter((repo) => repo.isForked).length} repositories</span> : null}
              </p>
              <p className={styles.subTitle}>Revent Github events</p>
              <p className={styles.description}>
                {this.state.loading ? <span>Loading...</span> : 
                  this.state.events ? this.state.events.map((event) => <span key={++eventCounter} id={"event" + eventCounter}>{new Date(Date.parse(event.eventDate)).toLocaleDateString()}: {event.eventType} in {event.eventRepo}<br/></span>): <span>None</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
