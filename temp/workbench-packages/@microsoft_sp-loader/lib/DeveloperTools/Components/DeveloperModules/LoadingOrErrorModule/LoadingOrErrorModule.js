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
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib-es2015/Spinner';
import { css } from 'office-ui-fabric-react/lib-es2015/Utilities';
import styles from './LoadingOrErrorModule.module.scss';
import strings from './LoadingOrErrorModule.resx';
var LoadingOrErrorModule = (function (_super) {
    __extends(LoadingOrErrorModule, _super);
    function LoadingOrErrorModule(props) {
        return _super.call(this, props) || this;
    }
    LoadingOrErrorModule.prototype.componentDidMount = function () {
        var _this = this;
        this.props.tab.loadComponent()
            .then(function () {
            _this.forceUpdate();
        })
            .catch(function (error) {
            _this.forceUpdate();
        });
    };
    LoadingOrErrorModule.prototype.render = function () {
        var tab = this.props.tab;
        if (tab.isLoading) {
            return React.createElement("div", { className: styles.loadingModule },
                React.createElement(Spinner, { type: SpinnerType.large, label: strings.developerToolsTabLoadingText }));
        }
        else if (tab.loadError || !tab.component) {
            var errorMessage = tab.loadError || strings.developerToolsTabLoadingUnknownError;
            return React.createElement("div", { className: styles.module },
                React.createElement("div", { "aria-live": 'assertive', className: styles.screenReaderErrorMessage, "data-automation-id": 'error-message' }, errorMessage),
                React.createElement("p", { className: css('ms-TextField-errorMessage', styles.errorText) }, errorMessage));
        }
        else {
            return React.createElement(tab.component);
        }
    };
    return LoadingOrErrorModule;
}(React.Component));
export default LoadingOrErrorModule;
