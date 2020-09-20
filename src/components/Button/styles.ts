import styled from 'styled-components'
import { shade } from 'polished'

const Container = styled.button`
  background-color: #ff9000;
  border: 0;
  border-radius: 10px;
  color: #232129;
  font-weight: 500;
  height: 56px;
  margin-top: 16px;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`

export { Container }
