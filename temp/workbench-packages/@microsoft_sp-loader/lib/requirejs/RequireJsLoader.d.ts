// [ts-npm-lint] removed reference to '../../typings/requirejs/index.d.ts'
import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { ServiceKey, ServiceScope } from '@microsoft/sp-core-library';
export interface IPreloadedDefineArgs {
    id: string;
    deps: string[];
    f: Function;
}
export interface IWindowWithRequireJs extends Window {
    requirejs: Require | undefined;
    require: Require | undefined;
    define: RequireDefine | undefined;
    /**
     * Global that's defined from the server when loading SPFx on IE. This enables executing the scripts using a mock
     * define() function that stores its parameters.
     * To be used when configuring a component to ensure that RequireJS handles it properly.
     */
    __spfxPreloadedModules?: {
        [id: string]: IPreloadedDefineArgs;
    };
}
/**
 * Loader for RequireJS.
 * Provides the instance of RequireJS and allows methods for configuration.
 */
export default class RequireJsLoader {
    static readonly serviceKey: ServiceKey<RequireJsLoader>;
    private static readonly _requireEventName;
    /**
     * This is the configured base URL for RequireJS.
     * When a user tries to call RequireJS with a relative path, an error will show this as the base URL.
     *
     * Example:
     * require("myModule") => Error: https://relative-path.invalid/myModule not found
     */
    private static readonly _invalidBaseUrl;
    private static _window;
    private _requirejs;
    private _define;
    private _configuredFailoverPaths;
    /**
     * Map to track duplicate module names, in the form { newModuleName -> originalModuleName }
     * There are case where 2 different components have different ids, but are pointing to the same script.
     * RequireJS doesn't accept that, so before calling require([modules], callback) it gets the original
     * module name, so it will load the right component.
     */
    private _duplicateModuleNames;
    constructor(serviceScope: ServiceScope);
    /**
     * Ensures that the module is present in RequireJS with the defined name.
     * In order to do so, it removes any pre-existing module that was already loaded.
     */
    ensure(name: string, module: any): void;
    /**
     * Calls actual RequireJS config()
     */
    requireConfig(config: RequireConfig): void;
    /**
     * Calls RequireJS require()
     * Catches exceptions and returns a rejected promise with the error from RequireJS
     */
    requireLoad<TModule>(name: string, globalName?: string): Promise<TModule>;
    /**
     * Calls RequireJS undef() with the name matching the input manifest.
     * Also removes the script tag from the head, so RequireJS will request the script again.
     */
    requireDelete(manifest: IClientSideComponentManifest): void;
    /**
     * For a module name, returns the URL that RequireJS is configured with.
     * @param name - Module name to request the URL from.
     */
    getConfiguredUrl(name: string): string;
    /**
     * Sets the config for RequireJS. Handles global exports, renames the dependencies.
     * Also sets AddressStore with the right mapping between script and URL.
     */
    configure(manifest: IClientSideComponentManifest): void;
    /**
       * Gets an array of missing dependencies hat failed to load.
       */
    getMissingDependencies(moduleName: string): string[];
    private _configureResource(name, resource, manifest, pathConfig, mapConfig, shimConfig);
    private _configurePathResource(name, resource, manifest, pathConfig, mapConfig, shimConfig);
    private _configureComponentResource(name, moduleConfiguration, manifest, pathConfig, mapConfig, shimConfig);
    private _fixUpJQueryKnownIssues(name, manifest, resource, resources);
    private _fixUpYammerKnownIssues(name, manifest, resource);
    private _fixWrongGlobalName(name, expectedName, knownBadName, expectedGlobalName, manifest, resource);
    private readonly requireContext;
    /**
     * Executes require([moduleName]) with the provided module name, returning a promise instead of callbacks.
     * @param moduleName Name of the module to load with require()
     */
    private _requirePromise<TModule>(moduleName);
    /**
     * If RequireJS is not loaded already, it will load it.
     * If it's loaded, it just takes the necessary variables from the window.
     */
    private _initialize();
    private _loadRequireJs();
    /**
     * Returns true if RequireJS has been loaded and is in the window variable
     */
    private _isRequireJsLoaded();
    /**
     * Sets the needed RequireJS variables in the RequireJsLoader to avoid going to the window
     * variable every time.
     */
    private _setRequireJsLocalVariables();
    /**
     * Helper method for RequireJS loader.
     * RequireJS takes addresses without the js extension, so this calls the real resolveAddress and removes that
     */
    private _resolveAddress(manifest, resourceName);
    /**
     * Resolves with the correct loaded module, when applicable.
     *
     * If the module is defined by a global variable, it returns the object in the global variable.
     * If the module has been loaded correctly, it returns the loaded module.
     * If the module failed to load and it's an SPFx component, we try to load a different version of the same component.
     *
     * This happens because if the version in the manifest and the version in the module name don't match,
     * RequireJS has a weird behavior where it loads the component but doesn't return it.
     */
    private _ensureProperModuleLoaded<TModule>(moduleName, module, globalName?);
    /**
     * When RequireJS rejects the load with an error, it can be due to different root causes.
     * If the module is set in the global, the load may fail but the module be correctly loaded in the global scope,
     * in that case we fix up RequireJS internals and return the global object.
     *
     * If there is a version mismatch between the version in the manifest and the version in the JS code,
     * RequireJS may fail.
     * In that case we try to load a different version of the same component.
     *
     * Otherwise, it rejects with the original error.
     */
    private _handleRequireJsError<TModule>(moduleName, error, globalName?);
    /**
     * Returns true if RequireJS loaded a module that matches the component id with a different version.
     * This only applies to to mismatches between manifest and bundle, not between 2 different manifest versions.
     */
    private _isOrphanedVersionLoaded(moduleName);
    /**
     * Returns true if the module name corresponds to an SPFx component.
     * SPFx components have module name in the form of "<componentId>_<version>"
     */
    private _isSpfxComponent(moduleName);
    /**
     * Returns the component id out of the module name.
     * Module names are generated based on "<componentId>_<version>"
     */
    private _extractComponentIdFromModuleName(moduleName);
    /**
     * Looks at the registry of RequireJS to find another version of the same component as moduleName,
     * if found, it configures RequireJS with the same dependency resolution (that comes from the manifest) and
     * ensuring that the path points only to the found version, and it loads the component.
     */
    private _requireLoadForDifferentVersion<TModule>(moduleName, error?);
}
