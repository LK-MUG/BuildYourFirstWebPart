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
import { Text } from '@microsoft/sp-core-library';
import styles from './PerformanceDisplay.module.scss';
import PerformanceGraph from './PerformanceGraph/PerformanceGraph';
import PerformanceHeader from './PerformanceHeader/PerformanceHeader';
import { getState } from '../../../DataProviders/PerformanceDisplayStateProvider';
import { _PerformanceLogger } from '@ms/sp-telemetry';
import strings from './PerformanceDisplay.resx';
var PerformanceDisplay = (function (_super) {
    __extends(PerformanceDisplay, _super);
    function PerformanceDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this._setState = function () {
            _this.setState(getState());
        };
        _this.state = getState();
        return _this;
    }
    PerformanceDisplay.prototype.componentDidMount = function () {
        _PerformanceLogger.addListener(this._setState);
    };
    PerformanceDisplay.prototype.componentWillUnmount = function () {
        _PerformanceLogger.removeListener(this._setState);
    };
    PerformanceDisplay.prototype.render = function () {
        if (this.state.errorMessage) {
            var errorMessageClass = [styles.errorMessage, styles.msFontColorRedDark].join(' ');
            return (React.createElement("div", { className: errorMessageClass },
                strings.GeneralErrorMessage,
                React.createElement("br", null),
                Text.format(strings.ErrorMessagePrefix, this.state.errorMessage)));
        }
        else {
            return (React.createElement("div", { className: styles.performanceDisplayContainer },
                React.createElement(PerformanceHeader, { perfItems: this.state.perfItems, overallDuration: this.state.eupl }),
                React.createElement("div", { className: styles.graphContainer },
                    React.createElement(PerformanceGraph, { perfItems: this.state.perfItems, startTime: this.state.startTime, overallDuration: this.state.eupl }))));
        }
    };
    return PerformanceDisplay;
}(React.Component));
export default PerformanceDisplay;
