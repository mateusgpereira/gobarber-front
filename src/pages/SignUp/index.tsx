import React, { useCallback } from 'react'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { Container, Content, Background } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.svg'

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Informe um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 caracteres')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt='Gobarber' />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name='name' icon={FiUser} placeholder='Nome' />
          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />
          <Button type='submit'>Cadastrar</Button>
        </Form>
        <a href='login'>
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  )
}

export default SignUp