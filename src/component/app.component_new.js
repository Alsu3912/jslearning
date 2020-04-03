"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var forecast_1 = require("../forecast");
var forecast_2 = require("../forecast");
var forecast_3 = require("../forecast");
;
;
var WeatherForecastPage = /** @class */ (function (_super) {
    __extends(WeatherForecastPage, _super);
    function WeatherForecastPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { loaded: true, result: { city: '...', temperatureMin: 0, temperatureMax: 0, windSpeed: 0, pressure: 0, humidity: 0 } };
        _this.forecastLoader = _this.forecastLoader.bind(_this);
        return _this;
    }
    WeatherForecastPage.prototype.componentDidMount = function () {
        var _this = this;
        forecast_1.getForecast(forecast_1.httpFetcher)
            .then(function (response) {
            if (response instanceof forecast_3.ErrorResponse) {
                _this.setState({ loaded: true, error: response });
            }
            else if (response instanceof forecast_2.DailyForecast) {
                _this.setState({ loaded: true, result: response });
            }
        });
    };
    WeatherForecastPage.prototype.forecastLoader = function () {
        var _this = this;
        this.setState({ loaded: false, result: { city: '...', temperatureMin: 0, temperatureMax: 0, windSpeed: 0, pressure: 0, humidity: 0 } });
        setTimeout(function () {
            forecast_1.getForecast(forecast_1.httpFetcher)
                .then(function (response) {
                if (response instanceof forecast_3.ErrorResponse) {
                    _this.setState({ loaded: true, error: response });
                }
                else if (response instanceof forecast_2.DailyForecast) {
                    _this.setState({ loaded: true, result: response });
                }
            });
        }, 1000);
    };
    WeatherForecastPage.prototype.render = function () {
        return react_1["default"].createElement("div", { className: "section" },
            react_1["default"].createElement(CoveredIMG, null),
            react_1["default"].createElement(Header, { result: this.state.result.city }),
            react_1["default"].createElement(CircularG, { error: this.state.error, result: this.state.result, loaded: this.state.loaded }),
            react_1["default"].createElement("div", { className: "main" },
                react_1["default"].createElement(Weather, { type: "temperatureMin", text: "Temeperature minimum", scale: "\u00B0C", result: this.state.result.temperatureMin }),
                react_1["default"].createElement(Weather, { type: "temperatureMax", text: "Temeperature maximum", scale: "\u00B0C", result: this.state.result.temperatureMax }),
                react_1["default"].createElement(Weather, { type: "windSpeed", text: "Wind speed", scale: "m/s", result: this.state.result.windSpeed }),
                react_1["default"].createElement(Weather, { type: "pressure", text: "Pressure", scale: "hPa", result: this.state.result.pressure }),
                react_1["default"].createElement(Weather, { type: "humidity", text: "humidity", scale: "%", result: this.state.result.humidity })),
            react_1["default"].createElement(Refresh, { loading: this.forecastLoader }));
    };
    return WeatherForecastPage;
}(react_1.Component));
var CoveredIMG = function () { return react_1["default"].createElement("div", { className: "covered-img" },
    react_1["default"].createElement("img", { className: "top", src: "img/top.png", alt: "Daily forecast" }),
    react_1["default"].createElement("h1", { className: "first-header" },
        react_1["default"].createElement("span", null, "Daily forecast"))); };
var Header = function (props) { return react_1["default"].createElement("h2", { className: "header" },
    "Current weather in ",
    react_1["default"].createElement("span", null, props.result)); };
var CircularG = function (props) {
    if (props.error) {
        return react_1["default"].createElement("h3", null, "failed to load");
    }
    else if (!props.loaded) {
        return react_1["default"].createElement("div", { id: "circularG" },
            react_1["default"].createElement("div", { id: "circularG_1", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_2", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_3", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_4", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_5", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_6", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_7", className: "circularG" }),
            react_1["default"].createElement("div", { id: "circularG_8", className: "circularG" }));
    }
    else {
        return react_1["default"].createElement("h3", { className: "block" });
    }
};
var Weather = function (props) { return react_1["default"].createElement("div", { className: "col" },
    react_1["default"].createElement("img", { src: "img/" + props.type + ".png", alt: props.text }),
    react_1["default"].createElement("p", null, props.text),
    react_1["default"].createElement("p", { className: "inline" }, props.result),
    react_1["default"].createElement("p", null, props.scale)); };
var Refresh = /** @class */ (function (_super) {
    __extends(Refresh, _super);
    function Refresh(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Refresh.prototype.handleClick = function () {
        this.props.loading();
    };
    Refresh.prototype.render = function () {
        return react_1["default"].createElement("button", { className: "btn", onClick: this.handleClick }, "Refresh");
    };
    return Refresh;
}(react_1.Component));
exports["default"] = WeatherForecastPage;
//# sourceMappingURL=app.component.js.map