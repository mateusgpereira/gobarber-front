import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  text-align: center;

  span {
    background-color: #ff9000;
    border-radius: 4px;
    color: #312e38;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    padding: 8px;
    transition: opacity 0.4s, visibility 0.4s;
    visibility: hidden;
    width: 175px;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`

export { Container }
