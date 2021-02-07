import React, { useState } from 'react'
import { FiClock, FiPower } from 'react-icons/fi'
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment
} from './styles'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../context/AuthContext'

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt='Go Barber' />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type='button' onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src='http://localhost:3000/files/6de8a38073dd50872be1-profile.jpg'
                alt='Mateus Tora'
              />
              <strong>Mateus Tora</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src='http://localhost:3000/files/6de8a38073dd50872be1-profile.jpg'
                  alt='Mateus Tora'
                />
                <strong>Mateus Tora</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src='http://localhost:3000/files/6de8a38073dd50872be1-profile.jpg'
                  alt='Mateus Tora'
                />
                <strong>Mateus Tora</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src='http://localhost:3000/files/6de8a38073dd50872be1-profile.jpg'
                  alt='Mateus Tora'
                />
                <strong>Mateus Tora</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  )
}

export default Dashboard
