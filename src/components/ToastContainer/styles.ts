import styled, { css } from 'styled-components'

interface ToastProps {
  type?: 'success' | 'error' | 'info'
  hasDescription: boolean
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background-color: #fddede;
    color: #c53030;
  `
}

const Container = styled.div`
  overflow: hidden;
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;
`

const Toast = styled.div<ToastProps>`
  ${(props) => toastTypeVariations[props.type || 'info']}

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  padding: 16px 30px 16px 16px;
  position: relative;
  width: 300px;

  > svg {
    margin: 4px 12px 0 0;
  }

  & + div {
    margin-top: 8px;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
      opacity: 0.8;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    color: inherit;
    opacity: 0.6;
    position: absolute;
    right: 16px;
    top: 19epx;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      > svg {
        margin-top: 0;
      }
    `}
`

export { Container, Toast }
