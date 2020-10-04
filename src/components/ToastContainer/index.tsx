import React from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Container, Toast } from './styles'

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has occurred</strong>
          <p>Unable to sign in to the app</p>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type='success' hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has occurred</strong>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type='error' hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>An error has occurred</strong>
          <p>Unable to sign in to the app</p>
        </div>

        <button type='button'>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  )
}

export default ToastContainer