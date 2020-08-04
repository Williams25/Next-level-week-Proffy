import React from 'react'
const whatsappIcon = require('../../assets/images/icons/whatsapp.svg')
require('./styles.css')

export default (props: any) => {
  return (
    <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/43673479?s=400&v=4" alt="" />
            <div>
              <strong>Nome</strong>
              <span>Matéria</span>
            </div>
          </header>
          <p>
            Texto descrição
          </p>

          <footer>
            <p>Preço/hora</p>
            <strong>R$80,00</strong>
            <button type="button">
              <img src={whatsappIcon} alt=""/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
  )
}