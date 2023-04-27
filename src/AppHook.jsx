import React, { useState } from "react";
import './index.css';

    
// const AppHook = () => {

//     const state = useState();
//     const [count , updatedCount] = useState(0);
    
//         // console.log(state);

//     const IncCount = () => {
//         updatedCount(count-10);
//         // console.log('clicked' + count++);

// }

// return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={IncCount}>Click Me</button>
//     </>
// )
// }


// const AppHook = () => {

//     const state = useState();
//     const currentTime = new Date().toLocaleTimeString();
//     const [currTime, updatedTime] = useState(currentTime);

//     const BtnClk = () => {      
//         const currentTime = new Date().toLocaleTimeString();
//         updatedTime(currentTime);
//     }

//     return(
//         <>
//             <h1>{currTime}</h1>
//             <button onClick={BtnClk}>Get Time</button>
//         </>
//     );
// }


// const AppHook = () => {
    
//     const currentTime = new Date().toLocaleTimeString();
//     const [currTime, updatedTime] = useState(currentTime);

//     const loopfunc = () => {
//         const currentTime = new Date().toLocaleTimeString();
//         updatedTime(currentTime);
//     }

//     setInterval( loopfunc , 1000)

//     return(
//         <>
//             <h1>{currTime}</h1>
//         </>
//     );
// }


const AppHook = () => {
    
    const bgcolor = 'pink';
    const textbtn = "CLICK ME"
    const [bg, updatedbg] = useState(bgcolor);
    const [text, updatedtext] = useState(textbtn);

    const bgChange = ()=>{
       updatedbg('purple');
       updatedtext('TADA');
    }

    const dbChange = ()=>{
        updatedbg('pink');
        updatedtext('Click me');
     }
    

    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={dbChange}>{text}</button> 
        </div>
        </>
    );
}

export default AppHook; 