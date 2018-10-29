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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'GithubProfileWebPartStrings';
import GithubProfile from './components/GithubProfile';
import { GithubAPIProvider } from '../../integration/GithubAPIProvider';
var GithubProfileWebPart = (function (_super) {
    __extends(GithubProfileWebPart, _super);
    function GithubProfileWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GithubProfileWebPart.prototype.render = function () {
        var element = React.createElement(GithubProfile, {
            githubUserName: this.properties.githubUserName,
            userFullName: this.properties.userFullName,
            githubDataProvider: new GithubAPIProvider()
        });
        ReactDom.render(element, this.domElement);
    };
    GithubProfileWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(GithubProfileWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    GithubProfileWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('githubUserName', {
                                    label: strings.UsernameFieldLabel
                                }),
                                PropertyPaneTextField('userFullName', {
                                    label: strings.FullNameFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return GithubProfileWebPart;
}(BaseClientSideWebPart));
export default GithubProfileWebPart;
//# sourceMappingURL=GithubProfileWebPart.js.map