import styled from 'styled-components';
import { KeyboardDatePicker } from '@material-ui/pickers';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-left: 10px;
  padding-right: 10px;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: ${props => (props.available ? 'normal' : 'bold')};
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-weight: ${props => (props.available ? 'normal' : 'bold')};
  }
`;

export const StyledPicker = styled(KeyboardDatePicker)`
  .MuiInputBase-input {
    display: none;
  }
  .MuiInput-underline:before {
    display: none;
  }
  .MuiInputAdornment-positionEnd {
    margin-left: 0px;
  }
  .MuiSvgIcon-root {
    display: none;
    fill: #fff;
  }
`;
