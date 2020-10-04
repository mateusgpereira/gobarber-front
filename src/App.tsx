import React from 'react'

import GlobalStyle from './styles/global'
import { AuthProvider } from './context/AuthContext'
import SignIn from './pages/SignIn'
import ToastContainer from './components/ToastContainer'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
  </>
)

export default App
