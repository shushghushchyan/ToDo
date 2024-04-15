import React, { useContext, useId} from 'react';
import './App.css';
import { MyContext } from './App';
import { TextField, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  input: {
    border: 'none',
    // '&:activ':{
    //   border: '2px solid red'
    // }
    '&  MuiInputLabel-formControl': 'none !important'
  }
})

function CompoInput() {
  const classes = useStyles()
  const { value, setValue, arr, setArr,check, id } = useContext(MyContext);

  const handleInput = (e) => {
    setValue(e.target.value)
  } 


  const handleAdd = (x) => {

    if (value.length > 0) {
      const newObj = {
        id: arr.length+1,
        todoName:value,
        statusChecked:check 
      }
      setArr([...arr, newObj]);
      setValue("");
    }
  }

  return (
    <div className='inputAndButton'>
      <TextField
        className={classes.input}
        sx={{
          background: "white",
          border:"5px dashed pink",
          width: "400px",
          borderRadius:"10px",
          height:"100%",
          marginTop: "40px"
        }}
        label="Dear Shushanna, you can do it"
        value={value}
        onChange={handleInput}
      />
      <IconButton
        sx={{
          marginTop: "36px",
          width: "150px",
          height: "70px",
          '&:hover': {
            background: "transparent",
          },
        }}
        onClick={handleAdd}
      >
        <FavoriteIcon sx={{ fontSize: 70, color: "white", marginRight: "8px", marginTop: "-8px"  }} />
        <Typography variant="button" sx={{position:"absolute",fontWeight: "700",color: "pink" ,marginTop:"-6px",marginRight:"6px", fontSize:"0.995rem",}}>ADD</Typography>
      </IconButton>
    </div>
  );
}

export default CompoInput;
