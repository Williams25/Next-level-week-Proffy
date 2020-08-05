import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherList, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from './../../components/Select/index';
import api from './../../services/api';

require('./styles.css')


export default (props: any) => {

  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title=" Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Física', label: 'Física' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            options={[
              { value: '0', label: 'domingo' },
              { value: '1', label: 'segunda' },
              { value: '2', label: 'terça' },
              { value: '3', label: 'quarta' },
              { value: '4', label: 'quinta' },
              { value: '5', label: 'sexta' },
              { value: '6', label: 'sabado' },
            ]}
          />

          <Input type="time" name="time" label="Hora" value={time} onChange={e => setTime(e.target.value)} />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      {teachers.map((teacher: Teacher) => {
        return <TeacherList key={teacher.id} teacher={teacher} />
      })}

    </div>
  )
}