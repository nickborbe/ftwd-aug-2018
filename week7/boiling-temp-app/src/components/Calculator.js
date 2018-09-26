// components/Calculator.js

import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';


class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
          temperature: "",
          scale : "c",
      }
  }


  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature: temperature});
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature: temperature});
  }


  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      
    
      
      return(

        <div>

        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={temperature => this.handleCelsiusChange(temperature)} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>

        )
    }
}

export default Calculator;