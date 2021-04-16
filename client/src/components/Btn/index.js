import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#444d63',
    color: '#f2f2f2',
    height: 48,
    fontSize: '1.2em',
    '&:hover': {
      backgroundColor: '#535f7a',
    },
  },
  disbaledStyle: {
    backgroundColor: '#8e99b1',
  },
});

const Btn = ({ text, disabled, handleClick }) => {
  const classes = useStyles();
  return (
    <Button
      disabled={disabled}
      className={disabled ? classes.disbaledStyle : classes.root}
      fullWidth
      variant="contained"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default Btn;
