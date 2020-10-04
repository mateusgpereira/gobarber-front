import React, { createContext, useContext, useCallback, useState } from 'react'
import { uuid } from 'uuidv4'
import ToastContainer from '../components/ToastContainer'

export interface ToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid()
      const toast = {
        id,
        type,
        title,
        description
      }

      setMessages((prevState) => [...prevState, toast])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    if (id) {
      setMessages((prevState) => {
        return prevState.filter((message) => message.id !== id)
      })
    }
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  )
}

const useToast = (): ToastContextData => {
  const context = useContext<ToastContextData>(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

export { useToast, ToastProvider, ToastContext }
