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
import { SPHttpClient } from '@microsoft/sp-http';
import { escape } from '@microsoft/sp-lodash-subset';
var GithubProfileWebPart = (function (_super) {
    __extends(GithubProfileWebPart, _super);
    function GithubProfileWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GithubProfileWebPart.prototype.readUserInfo = function (listItemId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl +
                ("/_api/web/lists/getByTitle('" + escape(_this.properties.listName) + "')/Items(" + listItemId + ")?$select=GithubUserName,ApplicantFullName"), SPHttpClient.configurations.v1)
                .then(function (response) {
                if (response.ok) {
                    response.json().then(function (responseJSON) {
                        if (responseJSON != null) {
                            resolve({ githubUserName: responseJSON.GithubUserName, userFullName: responseJSON.ApplicantFullName });
                        }
                    });
                }
                else if (response.status === 404) {
                    reject("Item with id " + listItemId + " could not be found");
                }
                else {
                    reject("Error: " + response.statusText + ". Cannot display information");
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    GithubProfileWebPart.prototype.readListItemId = function () {
        var url = new URL(window.location.href);
        return +url.searchParams.get("listItemId");
    };
    GithubProfileWebPart.prototype.validateListName = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (value === null ||
                value.length === 0) {
                resolve('Provide the list name');
                return;
            }
            _this.context.spHttpClient.get(_this.context.pageContext.web.absoluteUrl +
                ("/_api/web/lists/getByTitle('" + escape(value) + "')?$select=Id"), SPHttpClient.configurations.v1)
                .then(function (response) {
                if (response.ok) {
                    resolve('');
                    return;
                }
                else if (response.status === 404) {
                    resolve("List '" + escape(value) + "' doesn't exist in the current site");
                    return;
                }
                else {
                    resolve("Error: " + response.statusText + ". Please try again");
                    return;
                }
            })
                .catch(function (error) {
                resolve(error);
            });
        });
    };
    GithubProfileWebPart.prototype.render = function () {
        var _this = this;
        var listItemId = this.readListItemId();
        if (!listItemId) {
            var element = React.createElement('div', null, "The containing page must have a 'listItemId' parameter for this control to load");
            ReactDom.render(element, this.domElement);
            return;
        }
        if (!this.properties.listName) {
            var element = React.createElement('div', null, "Please supply a list name in the properties pane");
            ReactDom.render(element, this.domElement);
            return;
        }
        this.readUserInfo(listItemId).then(function (userInfo) {
            var element = React.createElement(GithubProfile, {
                githubUserName: userInfo.githubUserName,
                userFullName: userInfo.userFullName,
                githubDataProvider: new GithubAPIProvider()
            });
            ReactDom.render(element, _this.domElement);
        }, function (error) {
            var element = React.createElement('div', null, "Could not read user info. Error: " + error);
            ReactDom.render(element, _this.domElement);
        });
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
                                PropertyPaneTextField('listName', {
                                    label: strings.ListNameFieldLabel,
                                    onGetErrorMessage: this.validateListName.bind(this)
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