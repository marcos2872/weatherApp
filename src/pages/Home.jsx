/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import search from '../services/getApiWeather';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      btnlook: true,
      data: undefined,
    };
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(this.coordinates);
    // this.temp();
  }

  // coordinates = (props) => {
  //   const { coords } = props;
  //   this.setState({ lat: coords.latitude, lon: coords.longitude }, () => this.temp());
  // };

  saveInput = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value, btnlook: value.length < 3 });
  };

  btnBuscar = () => {
    this.weather();
  };

  weather = async () => {
    const { city } = this.state;
    const response = await search(city, 'metric');
    this.setState({ data: response, city: '' });
  };

  render() {
    const { city, btnlook, data } = this.state;
    return (
      <div>
        <input
          type="text"
          value={city}
          name="city"
          onChange={this.saveInput}
          placeholder="Digite o nome da cidade"
        />
        <input
          id="pesquisa"
          type="button"
          placeholder="Buscar"
          disabled={btnlook}
          onClick={this.btnBuscar}
        />
        {data
        && (
        <>
          <p />
          {data.name}
          <p>
            {data.main.temp}
            °C
          </p>
        </>
        )}
      </div>
    );
  }
}
