import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '10px',
    '& $notchedOutline': {
      borderColor: '#444d63a1',
    },
    '&:hover $notchedOutline': {
      borderColor: '#354263',
    },
    '&$focused $notchedOutline': {
      borderColor: '#444d63',
    },
  },
  focused: {},
  notchedOutline: {},
});

const Input = ({ label, type, value, setValue, helperText, id, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const outlinedInputClasses = useStyles();
  return (
    <FormControl variant="outlined">
      <InputLabel style={{ color: '#444d63' }} {...rest} htmlFor="password">
        {label}
      </InputLabel>
      <OutlinedInput
        margin="none"
        classes={outlinedInputClasses}
        {...rest}
        id={id}
        type={showPassword ? 'text' : type}
        value={value}
        onChange={setValue}
        endAdornment={
          type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
        labelWidth={70}
      />
      <FormHelperText {...rest}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Input;
