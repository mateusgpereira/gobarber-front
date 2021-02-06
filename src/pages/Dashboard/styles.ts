import styled from 'styled-components'

const Container = styled.div``

const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`

const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: auto;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`

const Profile = styled.div`
  align-items: center;
  display: flex;
  margin-left: 80px;

  img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    margin-left: 16px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`

export { Container, Header, HeaderContent, Profile }
