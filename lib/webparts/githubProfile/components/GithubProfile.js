var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import styles from './GithubProfile.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var GithubProfile = (function (_super) {
    __extends(GithubProfile, _super);
    function GithubProfile(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fullName: '',
            githubUserName: '',
            events: [],
            repos: [],
            loading: false
        };
        _this.loadGithubData = _this.loadGithubData.bind(_this);
        return _this;
    }
    GithubProfile.prototype.loadGithubData = function () {
        var _this = this;
        this.props.githubDataProvider.UserData(this.props.githubUserName).then(function (userInfo) {
            return _this.setState(__assign({}, _this.state, { repos: userInfo.repos, events: userInfo.events, loading: false }));
        });
    };
    GithubProfile.prototype.componentDidMount = function () {
        // has to be here to spawn a spy.
    };
    GithubProfile.prototype.componentDidUpdate = function () {
        if (this.state.githubUserName != this.props.githubUserName) {
            this.setState({ fullName: this.props.userFullName, githubUserName: this.props.githubUserName, loading: true, events: null, repos: null });
            this.loadGithubData();
        }
    };
    GithubProfile.prototype.render = function () {
        var repoCounter = 0;
        var eventCounter = 0;
        return (React.createElement("div", { className: styles.githubProfile },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { id: 'header', className: styles.title },
                            "Github information for ",
                            escape(this.props.userFullName)),
                        React.createElement("p", { className: styles.subTitle }, "Github repositories created"),
                        React.createElement("p", { className: styles.description },
                            this.state.loading ? React.createElement("span", null, "Loading...") :
                                this.state.repos ? this.state.repos.filter(function (repo) { return !repo.isForked; }).map(function (repo) { return React.createElement("span", { key: ++repoCounter, id: "repo" + repoCounter },
                                    escape(repo.repoName),
                                    " ",
                                    React.createElement("br", null)); }) : React.createElement("span", null, "None"),
                            !this.state.loading ? React.createElement("span", { id: 'forkCount' },
                                React.createElement("br", null),
                                "Additionally, ",
                                this.state.fullName,
                                " has forked ",
                                this.state.repos.filter(function (repo) { return repo.isForked; }).length,
                                " repositories") : null),
                        React.createElement("p", { className: styles.subTitle }, "Revent Github events"),
                        React.createElement("p", { className: styles.description }, this.state.loading ? React.createElement("span", null, "Loading...") :
                            this.state.events ? this.state.events.map(function (event) { return React.createElement("span", { key: ++eventCounter, id: "event" + eventCounter },
                                new Date(Date.parse(event.eventDate)).toLocaleDateString(),
                                ": ",
                                event.eventType,
                                " in ",
                                event.eventRepo,
                                React.createElement("br", null)); }) : React.createElement("span", null, "None")))))));
    };
    return GithubProfile;
}(React.Component));
export default GithubProfile;
//# sourceMappingURL=GithubProfile.js.map