import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signInBackground from '../../assets/sign-in-background.png'

const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  place-content: center;
  width: 100%;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
const AnimationContainer = styled.div`
  align-items: center;
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  place-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 347px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    align-items: center;
    color: #ff9000;
    display: flex;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 8px;
    }
  }
`

const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`

export { Container, AnimationContainer, Content, Background }
