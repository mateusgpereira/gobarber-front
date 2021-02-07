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

const Content = styled.main`
  display: flex;
  margin: 64px auto;
  max-width: 1120px;
`
const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    align-items: center;
    color: #ff9000;
    display: flex;
    font-weight: 400;
    margin-top: 8px;
  }

  span {
    align-items: center;
    display: flex;
  }

  span + span::before {
    background: #ff9000;
    content: '';
    height: 12px;
    margin: 0 8px;
    width: 1px;
  }
`
const Calendar = styled.aside`
  width: 380px;
`

const NextAppointment = styled.div`
  margin-top: 64px;

  strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    align-items: center;
    background: #3e3b47;
    border-radius: 10px;
    display: flex;
    margin-top: 24px;
    padding: 16px 24px;
    position: relative;

    &::before {
      background: #ff9000;
      content: '';
      height: 80%;
      left: 0;
      position: absolute;
      top: 10%;
      width: 1px;
    }

    img {
      border-radius: 50%;
      height: 80px;
      width: 80px;
    }

    strong {
      color: #fff;
      margin-left: 24px;
    }

    span {
      align-items: center;
      color: #999591;
      display: flex;
      margin-left: auto;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`

export {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment
}
