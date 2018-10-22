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
    function GithubProfile() {
        var _this = _super.call(this) || this;
        // TODO: populate the default state with whatever you want
        // I had to set something to make the jest running
        _this.state = {
            fullName: '',
            githubUserName: ''
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
                        React.createElement("span", { className: styles.title },
                            "Github information for ",
                            escape(this.state.fullName)),
                        React.createElement("p", { className: styles.subTitle }, "Customize SharePoint experiences using Web Parts."),
                        React.createElement("p", { className: styles.description }),
                        React.createElement("a", { href: "https://aka.ms/spfx", className: styles.button },
                            React.createElement("span", { className: styles.label }, "Learn more")))))));
    };
    return GithubProfile;
}(React.Component));
export default GithubProfile;
//# sourceMappingURL=GithubProfile.js.map