import React from 'react';

import { Link } from 'react-router-dom'

const backIcon = require('../../assets/images/icons/back.svg')
const logo = require('../../assets/images/logo.svg')

require('./styles.css')

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
              <img src={backIcon} alt="voltar"/>
          </Link>

          <img src={logo} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>
            {props.title}
          </strong>
          {props.children}
        </div>
      </header>
  )
}

export default PageHeader