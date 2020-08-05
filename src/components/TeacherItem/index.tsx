import React from 'react'
import api from './../../services/api';
const whatsappIcon = require('../../assets/images/icons/whatsapp.svg')
require('./styles.css')

export interface Teacher {
  id: string,
    subject: string,
    cost: Number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string
}
interface teacherInterface {
  teacher: Teacher
}

const TeacherItem: React.FC<teacherInterface> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar} alt="" />
          <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
          </div>
        </header>
        <p>
          {teacher.bio}
        </p>

        <footer>
          <p>Preço/hora</p>
          <strong>R${teacher.cost}</strong>
          <a href={`https://wa.me/${teacher.whatsapp}`}
            onClick={createNewConnection}
          >
            <img src={whatsappIcon} alt="" />
              Entrar em contato
            </a>
        </footer>
      </article>
    </main>
  )
}

export default TeacherItem