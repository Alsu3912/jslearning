// const {React} = require('react');
// const {ReactDOM} = require('react-dom')

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./component/app.component";
ReactDOM.render(<App />, document.querySelector("#root"));