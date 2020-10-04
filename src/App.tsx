import React from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'

import AppProvider from './context/index'

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
)

export default App
