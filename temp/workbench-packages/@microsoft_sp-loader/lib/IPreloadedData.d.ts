import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { _IODataPageContextInfo, IODataWeb, IODataUser, IODataList, IODataListItem, IODataContextWebInformation, IODataNavigationNodeCollection, IODataBasePermission } from '@microsoft/sp-odata-types';
/**
 * Represents the preloaded custom action object.
 *
 *  https://msdn.microsoft.com/en-us/library/office/ms460194.aspx
 *  https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction
 *
 * @internal
 */
export interface IPreloadedCustomAction {
    /**
     * Definition: Title of the custom action.
     * Required: no
     * Type: string
     * Example: "Custom Header"
     */
    title?: string;
    /**
     * Definition: location of the custom action. The location provides information about where the
     *  custom action is applied. All client side custom actions start with the prefix ClientSideExtension.
     *
     *  Application customizers like headers, footers have the location "ClientSideExtension.ApplicationCustomizer".
     *  ListView context menu custom actions have the location "ClientSideExtension.ListViewCommandSet.ContextMenu".
     *  ListView command bar custom actions have the location "ClientSideExtension.ListViewCommandSet.CommandBar".
     *  ListView custom actions that apply to all locations in the ListViewCommandSet use
     *   "ClientSideExtension.ListViewCommandSet". It is upto the application whether to apply that custom action
     *   in all the locations, e.g., an application may not have context menu or equivalent.
     *
     * Required: yes
     * Type: string
     * Example: "ClientSideExtension.ApplicationCustomizer"
     */
    location: string;
    /**
     * Definition: unique id of the custom action. It is of GUID format.
     * Required: yes
     * Type: string
     * Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294"
     */
    clientSideComponentId: string;
    /**
     * Definition: JSON string representing the properties of the custom action.
     * Required: no
     * Type: string
     * Example: "{backgroundColor: blue, text: 'All documents in this library are readonly'}"
     */
    clientSideComponentProperties?: string;
    /**
     * Definition: specifies the registration attachment for a per-item action.
     * Possible values include:
     *  None
     *  List
     *  ContentType
     *  ProgId
     *  FileType
     *
     * Required: no
     * Type: string
     * Example: "List"
     *
     */
    registrationType?: string;
    /**
     * Definition: specifies the identifier of the list or item content type that this action
     *  is associated with, or the file type or programmatic identifier (ProgID).
     *
     * Required: no
     * Type: string
     * Example: "101"
     */
    registrationId?: string;
    /**
     * Definition: specifies the ordering priority for actions.
     *
     * Required: no
     * Type: Number
     * Example: "1"
     */
    sequence?: number;
    /**
     * Definition: TRUE to specify that the item be displayed only if the user is a site administrator.
     *  otherwise, FALSE. Using the RequireSiteAdministrator attribute for the drop-down menu of SharePoint
     *  Foundation commands that are associated with list items is not supported.
     *
     * Required: no
     * Type: boolean
     * Example: "true"
     */
    requireSiteAdministrator?: boolean;
    /**
     * Definition:  specifies a set of rights that the user must have for the link to be visible, for example,
     *  "ViewListItems,ManageAlerts". If it is not specified, the action always appears in the list of actions.
     *  To specify multiple rights, separate the values by using commas. The set of rights are grouped logically
     *  according to AND logic, which means that a user must have all the specified rights to see an action. For
     *  a list of possible values, see Microsoft.SharePoint.SPBasePermissions.
     *
     * Required: no
     * Type: IODataBasePermission
     * Example: "{Low: 0x01, High: 0x02}"
     */
    rights?: IODataBasePermission;
}
/**
 * Application preloaded data
 *
 * @internal
 */
export interface IPreloadedData {
    /**
     * Id of the application
     */
    clientSideApplicationId?: string;
    /**
     * Preloaded manifests
     */
    manifests: IClientSideComponentManifest[];
    /**
     * Page context information
     */
    spPageContextInfo?: _IODataPageContextInfo;
    /**
     * The context information for a site.
     */
    contextWebInfo?: IODataContextWebInformation;
    /**
     * Represents a user in Microsoft SharePoint Foundation.
     */
    user?: IODataUser;
    /**
     * Represents a SharePoint site.
     */
    web?: IODataWeb;
    /**
     * Represents a list on a SharePoint Web site.
     */
    list?: IODataList;
    /**
     * Represents an item or row in a list.
     */
    item?: IODataListItem;
    /**
     * Represents an assorted set of information relating to the current user
     * and application. Information includes SitePageContent and if the user
     * can edit the current page.
     */
    page?: any;
    /**
     * Represents a collection of SP.NavigationNode objects.
     */
    quickLaunch?: IODataNavigationNodeCollection;
    /**
     * Client side custom actions.
     */
    customActions?: IPreloadedCustomAction[];
}
