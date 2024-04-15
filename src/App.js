import React, { useState, createContext, useEffect, } from 'react';
import CompoInput from './CompoInput';
import './App.css';
import CompoBox from './CompoBox';



export const MyContext = createContext();

function App() {
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const[check, setCheck] = useState(false)
 

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('todos'));
        if (storedData && storedData.length > 0) {
            setArr(storedData);
        }
    }, []);

    useEffect(() => {
        if (arr.length > 0) {
            localStorage.setItem('todos', JSON.stringify(arr));
        } else {
            localStorage.removeItem('todos'); 
        }
    }, [arr]);

    return (
        <MyContext.Provider value={{ value, setValue, arr, setArr,check,setCheck,}}>
            <div className="App">
                <div className='bigDiv'> 
                    <CompoInput />
                    <CompoBox />
                </div>
               
            </div>
        </MyContext.Provider>
    );
}

export default App;
