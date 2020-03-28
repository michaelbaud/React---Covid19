import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { Container } from 'react-bulma-components/dist';

import Select from './components/Select'
import Cards from './components/Cards'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countriesArray: [],
      globalStats: {},
      focusStats: {},
      errorStatus: false,
      focusCountry: "Monde"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async getCountriesArray() {
    try {
      let response = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
      if (response.status === 200) {
        this.setState({ countriesArray: [...this.state.countriesArray, "Monde"] })
        const data = await response.json()
        data.forEach(item => this.setState({ countriesArray: [...this.state.countriesArray, item.country] }))
      } else {
        this.setState({ errorStatus: true })
        console.error('Error status')
      }
    } catch (err) {
      console.error(err)
    }
  }

  async getGlobalStats() {
    try {
      let response = await fetch("https://coronavirus-19-api.herokuapp.com/all")
      if (response.status === 200) {
        const data = await response.json()
        this.setState({ globalStats: data })
      } else {
        this.setState({ errorStatus: true })
        console.error('Error status')
      }

    } catch (err) {
      console.error(err)
    }
  }

  handleChange(e) {
    this.setState({ focusCountry: e.target.value })
    e.target.value === "Monde" ? this.getGlobalStats() : this.getCountryStats()
  }

  async getCountryStats() {
    try {
      let response = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
      if (response.status === 200) {
        let data = await response.json()

        // Data object with ID
        data = Object.assign({}, data)

        // Data object with name of property
        let obj = {}
        for (let i in data) {
          obj = { ...obj, [data[i].country]: data[i] }
        }

        this.setState({ focusStats: obj[this.state.focusCountry] })

      } else {
        this.setState({ errorStatus: true })
        console.error('Error status')
      }

    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount() {
    this.getCountriesArray()
    this.getGlobalStats()
  }


  render() {

    return (
      <Container className="widthContainer">
        <Select
          countries={this.state.countriesArray}
          focusCountry={this.state.focusCountry}
          handleChange={this.handleChange}
        />
        <Cards
          globalStats={this.state.globalStats}
          focusStats={this.state.focusStats}
          focusCountry={this.state.focusCountry}
        />
        <div class="notification is-warning">
          Ces données sont généralement mises à jour aux alentours de 22H00 proviennent de l'API : <strong>"https://coronavirus-19-api.herokuapp.com/countries"</strong>
        </div>
      </Container>
    )
  }
}

export default App