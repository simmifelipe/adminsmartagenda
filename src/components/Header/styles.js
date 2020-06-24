import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 5px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #3cba92;
    }

    a {
      font-weight: bold;
      color: #3cba92;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #3cba92;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #3cba92;
      font-size: 15px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 13px;
      color: #3cba92;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
