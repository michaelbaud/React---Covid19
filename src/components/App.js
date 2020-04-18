import React, { useState, useEffect } from 'react'
import ReactGa from 'react-ga'

// CSS
import 'bulma/css/bulma.css'
import { Container } from 'react-bulma-components/dist';
import '../css/App.css'

// Components
import Title from './Title'
import Select from './Select'
import GlobalStats from './GlobalStats'
import FocusStats from './FocusStats'
import NotifErrorStatus from './NotifErrorStatus'
import NotifUpdated from './NotifUpdated'
import Ranking from './Ranking'
import Footer from './Footer'

// Helpers
import translate from '../helpers/translate';

const App = () => {

  const [globalStats, setGlobalStats] = useState({})
  const [focusStats, setFocusStats] = useState({})
  const [errorStatus, setErrorStatus] = useState(false)
  const [focusCountry, setFocusCountry] = useState("Monde")

  useEffect(() => {
    ReactGa.initialize('UA-163719407-1')
    ReactGa.pageview('/')
  }, [])

  useEffect(() => {
    getGlobalStats()
  }, [])

  const getGlobalStats = async () => {
    try {
      let response = await fetch("https://corona.lmao.ninja/v2/all/")
      const data = await response.json()
      setGlobalStats(data)
    } catch (err) {
      console.error('getGlobalStats error: ', err, err.stack)
      setErrorStatus(true)
    }
  }

  const getCountryStats = async (country) => {
    try {
      let response = await fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
      let data = await response.json()
      setFocusStats(data)
    } catch (err) {
      console.error('getCountryStats error: ', err, err.stack)
      setErrorStatus(true)
    }
  }

  const handleChange = (e) => {
    let target = e.target.value
    for (let [key, value] of Object.entries(translate)) {
      if (value === target) {
        target = key
      }
    }
    setFocusCountry(target)
    target === "Monde" ? getGlobalStats() : getCountryStats(target)
  }

  return (
    < Container className="widthContainer" >
      <Title />
      <Select
        className="is-outline"
        setErrorStatus={setErrorStatus}
        handleChange={handleChange}
      />
      {globalStats.cases && focusCountry === "Monde" && <GlobalStats globalStats={globalStats} />}
      {focusStats.cases && focusCountry !== "Monde" && <FocusStats focusStats={focusStats} />}
      <NotifErrorStatus errorStatus={errorStatus} />
      <NotifUpdated />
      <Ranking />
      <Footer />
    </Container >
  )

}

export default App