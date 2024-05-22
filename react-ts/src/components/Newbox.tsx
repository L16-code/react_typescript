// import React from 'react'

import { ThemeContext } from "../App";
import { useContext } from "react";
const Newbox = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);
    // alert(theme)
    return (
        <div className='boxContainer' style={{
            backgroundColor: theme==="dark"? 'black' : 'white',
            color: theme==="dark"? 'white' : 'black'
        }}>
            <h1>Box 1</h1>
            <button onClick={ toggleTheme}> Chang theme</button>
        </div>
    )
}

export default Newbox