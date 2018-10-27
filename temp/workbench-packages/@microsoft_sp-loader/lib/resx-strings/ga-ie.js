define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Ní féidir linn an feidhmchlár a lódáil ar an leathanach seo. Bain úsáid as an gcnaipe brabhsálaí ‘Siar’ chun triail eile a bhaint  as. Má leanann ar aghaidh leis an bhfadhb, déan teagmháil le riarthóir an tsuímh agus tabhair an fhaisnéis dóibh atá sna sonraí teicniúla.",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "***Invalid preloaded data.",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "***This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "***Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "***Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "***Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "***Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "***Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "***Error loading debug manifests.",
      "errorLoadingUnknownTitle": "***Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "***Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "***Close developer tools."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Rabhadh!",
      "warningLine1": "Má úsáideann tú an uirlis seo féadfaidh bagairtí slándála tarlú sa chaoi is go mbeidh daoine eile ábalta do chuid sonraí pearsanta Office 365 (doiciméid, ríomhphoist, comhráite agus tuilleadh) a rochtain. Cinntigh go bhfuil iontaoibh agat as an duine nó eagraíocht a d’iarr ort an uirlis seo a rochtain sula leanfaidh tú ar aghaidh.",
      "warningLine2": "Tuilleadh faisnéise: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "An bhfuil fonn ort scripteanna a dhífhabhtú?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "An bhfuil fonn ort an lódálaí dífhabhtaithe a cheadú agus scripteanna a dhífhabhtú?",
      "debugManifestLoadingWarning": "RABHADH: Tá an leathanach seo ag iarraidh scripteanna neamhshlána a lódáil, rud a d’fhéadfadh dochar a dhéanamh do do ríomhaire! Ná lean ar aghaidh mura bhfuil iontaoibh agat as an bhforbróir agus mura dtuigeann tú na baoil.",
      "debugManifestLoadingWarning2": "Mura bhfuil tú cinnte, cliceáil ar {0}.",
      "debugManifestLoadingConfirm": "Lódáil na scripteanna dífhabhtacha",
      "debugManifestLoadingCancel": "Ná lódáil na scripteanna dífhabhtacha",
      "debugManifestLoadingCalloutText": "Mura bhfuil a fhios agat cad atá le déanamh, cliceáil anseo."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Comhaid léirithe",
      "noManifestSelected": "Níl aon chomhad léirithe roghnaithe"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Feidhmíocht",
      "ErrorAccessingPerfDataErrorMessage": "Ní féidir na sonraí feidhmíochta a aisghabháil: tá an oibiacht neamhnitheach nó neamhshainithe.",
      "ErrorAccessingRedirectDataErrorMessage": "Bhí fadhb leis na sonraí feidhmíochta atreoraithe HTTP a rochtain.",
      "ErrorParsingPercievedLatencyErrorMessage": "Tharla earráid agus na sonraí aga folaigh meabhairbhraite á bparsáil.",
      "ErrorParsingApiDataErrorMessage": "Tharla earráid agus na sonraí API á bparsáil.",
      "UnkownPerformanceDataErrorMessage": "Tharla earráid neamhaithnid: {0}",
      "DefaultWebPartName": "Comhpháirt Ghréasáin",
      "ServerResponseLabel": "Freagairt ón bhfreastalaí",
      "ApplicationInitializationLabel": "Túsú an fheidhmchláir",
      "ScriptFetchEvalLabel": "Meastóireacht agus an script a fháil",
      "SpLoaderStartLabel": "Túsú SPFx",
      "PageRenderLabel": "Rindreáil an leathanaigh",
      "LeftNavRenderLabel": "Rindreáil na nascleanúna clé",
      "CanvasRenderLabel": "Rindreáil an chanbháis",
      "LayoutRenderLabel": "Rindreáil leagain amach",
      "RedirectResponseLabel": "Freagra atreoraithe",
      "AppLoadLabel": "Lódáil an fheidhmchláir",
      "RenderWebPartsLabel": "Rindreáil na gcomhpháirteanna Gréasáin",
      "TotalRenderTimeLabel": "Iomlán",
      "GeneralErrorMessage": "Ár leithscéal, tharla fadhb agus na sonraí feidhmíochta á n-aisghabháil.",
      "ErrorMessagePrefix": "Teachtaireacht earráide: {0}",
      "PerformanceDataHint": "Nóta: Nuair a chuirtear comhpháirt Ghréasáin leis nó nuair bhaintear comhpháirt Ghréasáin, athnuaigh an leathanach chun na sonraí nuashonraithe feidhmíochta a thaispeáint.",
      "ModulesLoadedLegendLabel": "Modúil lódáilte",
      "InitializationLegendLabel": "Túsú",
      "RenderTimeLegendLabel": "Aga rindreála",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Fáil sonraí",
      "ItemsColumnHeader": "Míreanna",
      "DurationColumnHeader": "Aga",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/B"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Lorg",
      "EmptyTraceData": "Níl aon loirg lódáilte.",
      "ExportCSVButtonLabel": "Easpórtáil CSV",
      "LevelHeaderLabel": "Leibhéal",
      "MessageHeaderLabel": "Teachtaireacht",
      "ScopeHeaderLabel": "Scóip",
      "SourceHeaderLabel": "Foinse",
      "TimestampHeaderLabel": "Stampa ama",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Bhí fadhb leis na sonraí loirg a rochtain."
    }
  };

  strings.default = strings;
  return strings;
});