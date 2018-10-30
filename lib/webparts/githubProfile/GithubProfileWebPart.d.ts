import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface IGithubProfileWebPartProps {
    listName: string;
}
export default class GithubProfileWebPart extends BaseClientSideWebPart<IGithubProfileWebPartProps> {
    private readUserInfo(listItemId);
    private readListItemId();
    private validateListName(value);
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
