import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GithubProfileWebPartStrings';
import GithubProfile from './components/GithubProfile';
import { IGithubProfileProps } from './components/IGithubProfileProps';
import { GithubAPIProvider } from '../../integration/GithubAPIProvider';

export interface IGithubProfileWebPartProps {
  githubUserName: string;
  userFullName: string;
}

export default class GithubProfileWebPart extends BaseClientSideWebPart<IGithubProfileWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGithubProfileProps> = React.createElement(
      GithubProfile,
      {
        githubUserName: this.properties.githubUserName,
        userFullName: this.properties.userFullName,
        githubDataProvider: new GithubAPIProvider()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
