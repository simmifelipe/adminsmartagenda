import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #fff;
      font-weight: bold;
      color: #3cba92;
      border: 0;
      border-color: #ffff;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        border: 2px;
        background: ${darken(0.08, '#3cba92')};
        color: #fff;
        border-style: solid;
        border-color: #fff;
      }
    }
  }

  > button {
    margin: 15px 0 0;
    height: 44px;
    background: #fff;
    font-weight: bold;
    color: #ff2326;
    border: 0;
    border-color: #ffff;
    border-radius: 4px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      border: 2px;
      background: ${darken(0.08, '#ff2326')};
      color: #fff;
      border-style: solid;
      border-color: #fff;
    }
  }
`;
