import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// eslint-disable-next-line
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import 'moment/locale/pt-br';
import styled from 'styled-components';
import { StyledPicker, Container, Time } from './styles';
import api from '~/services/api';

// Cor do Calendário quando abre
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3cba92',
    },
  },
});

const locale = 'ptBR';
moment.locale('ptBR');

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const [selectedDate, setSelectedDate] = React.useState(new Date(date));

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(
            a => parseISO(a.date).toString() === compareDate.toString()
          ),
        };
      });
      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function openData() {
    document.querySelector('[aria-label="change date"]').click();
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <button onClick={openData}>
          <strong>{dateFormatted}</strong>
        </button>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider
          libInstance={moment}
          utils={MomentUtils}
          locale={locale}
        >
          <Grid container justify="space-around">
            <StyledPicker
              // disablePast="true"
              margin="normal"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
