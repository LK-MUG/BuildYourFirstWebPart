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
import * as React from 'react';
import styles from './GithubProfile.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
var GithubProfile = (function (_super) {
    __extends(GithubProfile, _super);
    function GithubProfile(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            fullName: props.userFullName,
            githubUserName: props.githubUserName,
            commits: [],
            repos: []
        };
        return _this;
    }
    GithubProfile.prototype.componentDidMount = function () {
        // has to be here to spawn a spy.
    };
    GithubProfile.prototype.render = function () {
        return (React.createElement("div", { className: styles.githubProfile },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { id: 'header', className: styles.title },
                            "Github information for ",
                            escape(this.props.userFullName)),
                        React.createElement("p", { className: styles.subTitle }, "See Github repositories and contributions."),
                        React.createElement("p", { className: styles.description }))))));
    };
    return GithubProfile;
}(React.Component));
export default GithubProfile;
//# sourceMappingURL=GithubProfile.js.map