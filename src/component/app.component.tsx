import React, { Component } from "react";
import { getForecast, httpFetcher } from "../forecast";
import { DailyForecast } from "../forecast";
import { ErrorResponse } from "../forecast"


interface ForecastProps {
    state: State
};

interface State {
    loaded: boolean;
    result?: DailyForecast;
    error?: ErrorResponse;
};

interface HeaderProps {
    result: string;
}

interface WeatherProps {
    type: string;
    text: string;
    scale: string;
    result: number;
}

interface RefreshProps {
    loading: () => void;
} 

export class WeatherForecastPage extends Component<{}, State> {
    constructor(props: ForecastProps) {
        super(props);
        this.state = { loaded: true, result: { city: '...', temperatureMin: 0, temperatureMax: 0, windSpeed: 0, pressure: 0, humidity: 0 } };
        this.forecastLoader = this.forecastLoader.bind(this);
    }

    componentDidMount?(): void {
        getForecast(httpFetcher)
            .then(response => {
                if (response instanceof ErrorResponse) {
                    this.setState({ loaded: true, error: response});
                } else if (response instanceof DailyForecast) {
                    this.setState({ loaded: true, result: response});
                }
            })
    }

    forecastLoader(): void {
        this.setState({ loaded: false, result: { city: '...', temperatureMin: 0, temperatureMax: 0, windSpeed: 0, pressure: 0, humidity: 0 } });
        setTimeout((): void => {
            getForecast(httpFetcher)
                .then(response => {
                    if (response instanceof ErrorResponse) {
                        this.setState({ loaded: true, error: response});
                    } else if (response instanceof DailyForecast) {
                        this.setState({ loaded: true, result: response});
                    }
                })
        }, 1000)
    }

    render(): JSX.Element {
        return <div className="section">
            <CoveredIMG />
            <Header result={this.state.result.city} />
            <CircularG error={this.state.error} result={this.state.result} loaded={this.state.loaded} />
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

const CoveredIMG = () => <div className="covered-img">
    <img className="top" src="img/top.png" alt="Daily forecast"></img>
    <h1 className="first-header"><span>Daily forecast</span></h1>
</div>

const Header = (props: HeaderProps) => <h2 className="header">Current weather in <span>{props.result}</span></h2>

const CircularG = (props: State) => {
    if (props.error) {
        return <h3>failed to load</h3>
    } else if (!props.loaded) {
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

const Weather = (props: WeatherProps) => <div className="col">
    <img src={"img/" + props.type + ".png"} alt={props.text}></img>
    <p>{props.text}</p>
    <p className="inline">{props.result}</p>
    <p>{props.scale}</p>
    </div>

class Refresh extends Component<RefreshProps> {
    constructor(props: RefreshProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.loading();
    }

    render(): JSX.Element {
        return <button className="btn" onClick={this.handleClick}>Refresh</button>
    }
}
