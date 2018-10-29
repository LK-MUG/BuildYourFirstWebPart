/// <reference types="react" />
import * as React from 'react';
import { IGithubProfileProps } from './IGithubProfileProps';
import { IGithubProfileState } from './IGithubProfileState';
export default class GithubProfile extends React.Component<IGithubProfileProps, IGithubProfileState> {
    constructor(props: IGithubProfileProps);
    private loadGithubData();
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.ReactElement<IGithubProfileProps>;
}
