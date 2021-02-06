import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../context/ToastContext'
import { Container, AnimationContainer, Content, Background } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

interface ForgotPasswordFormData {
  email: string
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      setLoading(true)
      formRef.current?.setErrors({})
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Informe um email válido')
        })
        await schema.validate(data, {
          abortEarly: false
        })

        // recuperação de senha
        await api.post('/password/forgot', {
          email: data.email
        })

        addToast({
          type: 'success',
          title: 'Recover email sent',
          description:
            'We sent you an email to recover the password, check you inbox.'
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'An error has occurrerd',
          description: 'Unable to recover the password'
        })
      } finally {
        setLoading(false)
      }
    },
    [addToast]
  )

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt='Gobarber' />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar Senha</h1>
            <Input name='email' icon={FiMail} placeholder='E-mail' />

            <Button loading={loading} type='submit'>
              Recuperar
            </Button>
          </Form>
          <Link to='/signup'>
            <FiLogIn />
            Voltar ao login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}
export default ForgotPassword
