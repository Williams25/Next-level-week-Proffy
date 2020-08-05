import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

const warningIcon = require('../../assets/images/icons/warning.svg')
require('./styles.css')

export default (props: any) => {

  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  const addNewScheduleItem = () => {
    setScheduleItems(
      [
        ...scheduleItems,
        { week_day: 0, from: '', to: '' }
      ]
    )
  }

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updateScheduleItems = scheduleItems.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value }
      }
      return item
    })
    setScheduleItems(updateScheduleItems)
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastrado')
      history.push('/')
    }).catch(() => alert('erro'))

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input type="text" name="name" label="Nome completo" value={name} onChange={e => setName(e.target.value)} />

            <Input type="text" name="avatar" label="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />

            <Input type="text" name="whatsapp" label="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

            <Textarea name="bio" label="Biografia" value={bio} onChange={e => setBio(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="materia"
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Física', label: 'Física' },
              ]}
            />

            <Input type="text" name="cost" label="Custo hora por aula" value={cost} onChange={e => setCost(e.target.value)} />

          </fieldset>

          <fieldset>

            <legend>
              Horários disponíveis
              <button type="button" 
                onClick={addNewScheduleItem}>
                  + Novo horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                  <Input type="time" name="from" label="Das"
                    value={item.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />

                  <Input type="time" name="to" label="Até"
                    value={item.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                </div>
              )
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>

            <button type="submit">
              Salvar cadastro
          </button>
          </footer>
        </form>
      </main>
    </div>
  )
}