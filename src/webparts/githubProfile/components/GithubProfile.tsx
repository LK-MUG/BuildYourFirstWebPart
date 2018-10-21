import * as React from 'react';
import styles from './GithubProfile.module.scss';
import { IGithubProfileProps } from './IGithubProfileProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IGithubProfileState } from './IGithubProfileState';

export default class GithubProfile extends React.Component<IGithubProfileProps, IGithubProfileState> {

  constructor() {
    super();

    // TODO: populate the default state with whatever you want
    // I had to set something to make the jest running
    this.state = {
      fullName: '', 
      githubUserName: ''
    };

  }

  public componentDidMount(): void {
    // has to be here to spawn a spy.
  }

  public render(): React.ReactElement<IGithubProfileProps> {
    return (
      <div className={styles.githubProfile}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Github information for {escape(this.state.fullName)}</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}></p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
