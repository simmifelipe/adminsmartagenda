import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #0ba360, #3cba92);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
      background-color: #EF5648;
      color: #fff;
      align-self: flex-start;
      margin: 0 0 10px;
      padding: 4px;
      font-weight: bold;
      border-radius: 5px;
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

    login:hover {
      border-radius: 20px;  
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
