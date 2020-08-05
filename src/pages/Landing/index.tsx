import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

const logo = require('../../assets/images/logo.svg')
const landing = require('../../assets/images/landing.svg')
const studyIcon = require('../../assets/images/icons/study.svg')
const giveClassesIcon = require('../../assets/images/icons/give-classes.svg')
const purpleHeartIcon = require('../../assets/images/icons/purple-heart.svg')

require('./styles.css')

export default (props: any) => {

  const [totalconnection, setTotalConnection] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data
      setTotalConnection(total)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landing}
          alt="Plataforma de estudos"
          className="hero-img"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalconnection} conexões realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}