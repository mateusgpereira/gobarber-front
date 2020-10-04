import React, { useCallback, useRef } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'
import { useAuth } from '../../context/AuthContext'
import { Container, Content, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.svg'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({})
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Informe um email válido'),
          password: Yup.string().required('Senha obrigatória')
        })
        await schema.validate(data, {
          abortEarly: false
        })

        signIn({
          email: data.email,
          password: data.password
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
      }
    },
    [signIn]
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt='Gobarber' />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name='email' icon={FiMail} placeholder='E-mail' />
          <Input
            name='password'
            icon={FiLock}
            type='password'
            placeholder='Senha'
          />
          <Button type='submit'>Entrar</Button>
          <a href='forgot'>Esqueci minha senha</a>
        </Form>
        <a href='login'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}
export default SignIn
