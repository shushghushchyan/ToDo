import React, { useContext } from 'react';
import { MyContext } from './App';
import './App.css';
import { Box, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CompoBox() {
    const { arr, setArr, } = useContext(MyContext);

    const handleDelete = (index) => {
        const filteredArr = arr.filter((el, x) => x !== index);
        setArr(filteredArr);
    };

    const handleCheck = (index) => (ev) => {
        const newArr = arr.map((el, i) => {
            if (i === index) {
                return {
                    ...el,
                    statusChecked: ev.target.checked
                };
            }
            return el;
        });
        setArr(newArr);
    };

    return (
        <div className='divToDo'>
            <Box sx={{
                background: "white",
                gap: "20px",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px",
                padding: "10px",
                width: "600px",
                height: "auto",
                display: "flex",
            }}>
                {arr.map((el, index) => (
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }} key={index}>
                         <Checkbox
                            checked={el.statusChecked}
                            onChange={handleCheck(index)}
                            sx={{
                                color: "rgb(170, 20, 122)"
                            }}
                        />
                        {el.todoName}
                        <DeleteIcon sx={{ color: "rgb(170, 20, 122)" }} onClick={() => handleDelete(index)} />
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default CompoBox;
