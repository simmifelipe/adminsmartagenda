import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import api from '~/services/api';
import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root2: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid #3cba92',
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#3cba92',
    },
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    '& .MuiBottomNavigationAction-root.Mui-selected': {
      color: '#fff',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    marginBottom: '10px',
  },
  button: {
    margin: theme.spacing(1),
  },
  CheckBoxTime: {
    color: '#fff',
    backgroundColor: '#3cba92',
    borderRadius: '16px',
    marginRight: '25px',
    marginBottom: '10px',
  },
  CheckBoxLabel: {
    paddingRight: '10px',
    fontSize: '15px',
  },
  customTime: {
    color: '#fff',
    backgroundColor: '#3cba92',
    borderRadius: '16px',
    '&:hover': {
      background: "#309676",
   },
  },
}));

const CheckBox = withStyles({
  root: {
    color: '#fff',
    '&$checked': {
      color: '#fff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function Services() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <div className="service_container">
        <div className="service_content">
          <div className={classes.root2}>
            <TextField label="Descrição" fullWidth id="standard-full-width" />
            <TextField
              className={clsx(classes.margin, classes.textField)}
              label="Valor"
              fullWidth
              id="standard-full-width"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
            <div className="service_content">
              <FormGroup row>
                <FormControlLabel
                  classes={{
                    root: classes.CheckBoxTime,
                    label: classes.CheckBoxLabel,
                  }}
                  control={
                    <CheckBox
                      checked={state.checked1}
                      onChange={handleChange}
                      name="checked1"
                    />
                  }
                  label="15 min"
                />
                <FormControlLabel
                  classes={{
                    root: classes.CheckBoxTime,
                    label: classes.CheckBoxLabel,
                  }}
                  control={
                    <CheckBox
                      checked={state.checked2}
                      onChange={handleChange}
                      name="checked2"
                    />
                  }
                  label="30 min"
                />
                <FormControlLabel
                  classes={{
                    root: classes.CheckBoxTime,
                    label: classes.CheckBoxLabel,
                  }}
                  control={
                    <CheckBox
                      checked={state.checked3}
                      onChange={handleChange}
                      name="checked3"
                    />
                  }
                  label="45 min"
                />
                <FormControlLabel
                  classes={{
                    root: classes.CheckBoxTime,
                    label: classes.CheckBoxLabel,
                  }}
                  control={
                    <CheckBox
                      checked={state.checked4}
                      onChange={handleChange}
                      name="checked4"
                    />
                  }
                  label="1 hr"
                />
              </FormGroup>
            </div>
            <Button
              classes={{
                root: classes.customTime,
              }}
              variant="contained"
              startIcon={<EditIcon />}
            >
              custom
            </Button>
          </div>
        </div>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  {/* Título */}
                  <Typography gutterBottom variant="subtitle1">
                    Corte de Cabelo - Masculino
                  </Typography>
                  {/* Icon + Tempo Previsto */}
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <AccessTimeIcon color="disabled" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        30 minutos
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="buttons">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.button}
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                    >
                      Excluir
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">R$ 25,00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  {/* Título */}
                  <Typography gutterBottom variant="subtitle1">
                    Corte de Cabelo - Feminino
                  </Typography>
                  {/* Icon + Tempo Previsto */}
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <AccessTimeIcon color="disabled" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        45 minutos
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className="buttons">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.button}
                      startIcon={<EditIcon />}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      className={classes.button}
                      startIcon={<DeleteIcon />}
                    >
                      Excluir
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">R$ 35,00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}
