import React, { Component } from "react";
import {getForecast, httpFetcher} from "../forecast";

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: true, result: "" };
        this.forecastLoader = this.forecastLoader.bind(this);
    }

    componentDidMount() {
        getForecast(httpFetcher)
            .then(e => {
                this.setState({ loaded: true, result: e });
            })
    }

    forecastLoader() {
        this.setState({ loaded: false, result: { city: '...', temperatureMin: "00", temperatureMax: "00", windSpeed: "00", pressure: "0000", humidity: "00" } });
        setTimeout(() => {
            getForecast(httpFetcher)
                .then(e => {
                    this.setState({ loaded: true, result: e });
                })
        }, 1000)
    }

    render() {
        return <div className="section">
            <CoveredIMG />
            <Header result={this.state.result.city} />
            <CircularG result={this.state.result} loaded={this.state.loaded}/>
            <div className="main">
                <Weather type="temperatureMin" text="Temeperature minimum" scale="°C" result={this.state.result.temperatureMin} />
                <Weather type="temperatureMax" text="Temeperature maximum" scale="°C" result={this.state.result.temperatureMax} />
                <Weather type="windSpeed" text="Wind speed" scale="m/s" result={this.state.result.windSpeed} />
                <Weather type="pressure" text="Pressure" scale="hPa" result={this.state.result.pressure} />
                <Weather type="humidity" text="humidity" scale="%" result={this.state.result.humidity} />
            </div>
            <Refresh loading={this.forecastLoader} />
        </div>
    }
}
export default MyComponent;

class CoveredIMG extends Component {
    render() {
        return <div className="covered-img">
            <img className="top" src="img/top.png" alt="Daily forecast"></img>
            <h1 className="first-header"><span>Daily forecast</span></h1>
        </div>
    }
}

class Header extends Component {
    render() {
        return <h2 className="header">Current weather in <span id="city">{this.props.result}</span></h2>
    }
}

class CircularG extends Component {
    render() {
        if (this.props.result.fail) {
            return <h3>failed to load</h3>
        } else if (!this.props.loaded) {
            return <div id="circularG">
                <div id="circularG_1" className="circularG"></div>
                <div id="circularG_2" className="circularG"></div>
                <div id="circularG_3" className="circularG"></div>
                <div id="circularG_4" className="circularG"></div>
                <div id="circularG_5" className="circularG"></div>
                <div id="circularG_6" className="circularG"></div>
                <div id="circularG_7" className="circularG"></div>
                <div id="circularG_8" className="circularG"></div>
            </div>
        } else {
            return <h3 className="block"></h3>
        }
    }
}

class Weather extends Component {
    render() {
        return <div className="col">
            <img src={"img/" + this.props.type + ".png"} alt={this.props.text}></img>
            <p>{this.props.text}</p>
            <p className="inline">{this.props.result}</p>
            <p>{this.props.scale}</p>
        </div>
    }
}

class Refresh extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.loading();
    }

    render() {
        return <button id="fetchForecastBtn" className="btn" onClick={this.handleClick}>Refresh</button>
    }
}
