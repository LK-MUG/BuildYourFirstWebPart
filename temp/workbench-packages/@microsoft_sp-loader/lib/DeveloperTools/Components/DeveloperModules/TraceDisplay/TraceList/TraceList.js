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
import { LogLevel } from '../../../../Stores/TraceDisplayStore';
import TraceListHeader from './TraceListHeader/TraceListHeader';
import TraceListItem from './TraceListItem/TraceListItem';
import { triggerCsvDownload } from './CsvRenderer';
import styles from './TraceList.module.scss';
import strings from './../TraceDisplay.resx';
var TraceList = (function (_super) {
    __extends(TraceList, _super);
    function TraceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TraceList.prototype.render = function () {
        var _this = this;
        var idCounter = 0;
        var displayedTraces = [];
        var levelFilters = this.props.filters.level;
        var scopeFilters = this.props.filters.scope;
        var sourceFilters = this.props.filters.source;
        if (!this.props.allTraces) {
            return React.createElement("div", null,
                React.createElement(TraceListHeader, { filters: this.props.filters }),
                strings.EmptyTraceData);
        }
        this.props.allTraces.forEach(function (trace) {
            if (levelFilters[LogLevel[trace.level]] === false) {
                return;
            }
            if (trace.scope) {
                _this._addFilterLabel(trace.scope.id, scopeFilters);
                if (!scopeFilters[trace.scope.id]) {
                    return;
                }
            }
            else if (scopeFilters.none === false) {
                return;
            }
            if (trace.source) {
                _this._addFilterLabel(trace.source, sourceFilters);
                if (!sourceFilters[trace.source]) {
                    return;
                }
            }
            displayedTraces.push(React.createElement(TraceListItem, { key: idCounter, id: idCounter, trace: trace }));
            idCounter++;
        });
        return (React.createElement("div", { className: styles.container },
            React.createElement("button", { onClick: function () { return triggerCsvDownload(_this.props.allTraces); } }, strings.ExportCSVButtonLabel),
            React.createElement(TraceListHeader, { filters: this.props.filters }),
            React.createElement("ul", { className: styles.traceListItemsContainer }, displayedTraces)));
    };
    TraceList.prototype._addFilterLabel = function (filterLabel, multiFilter) {
        if (filterLabel && !(filterLabel in multiFilter)) {
            multiFilter[filterLabel] = true;
        }
    };
    return TraceList;
}(React.Component));
export default TraceList;
