import React, { useState } from "react";

// const AppForm = () =>{

//     const Greeting = 'Hello';
//     const [text , updatedtext] = useState(Greeting)
//     const textchange = () =>{
//         const newGreet = 'Hello Muneeba Manzoor'
//         updatedtext(newGreet);
//     }

//     return(
//         <>
//         <div>
//             <h1>{text}</h1>
//             <input placeholder="Enter Your Name" type="text"></input>
//             <button onClick={textchange}>Submit</button>
//         </div>
//         </>
//     );
// }


// const AppForm = () =>{

//     const [text , updatedtext] = useState('')
//     const nameinp = (event)=>{
//         updatedtext(event.target.value);
//     }

//     return(
//         <>
//         <div>
//             <h1>Hello {text}</h1>
//             <input className="inp" placeholder="Enter Your Name" type="text" onChange={nameinp}></input>
//             <button onClick={nameinp}>Submit</button>
//         </div>
//         </>
//     );
// }



const AppForm = () =>{

    const [text , updatedtext] = useState('')
    const [fulltext , updatedfulltext] = useState('')
    const nameinp = (event)=>{
        updatedtext(event.target.value);
    }
    
    const btnClk = () =>{
        updatedfulltext(text);
    }

    return(
        <>
        <div>
            <h1>Hello {fulltext}</h1>
            <input className="inp" placeholder="Enter Your Name" type="text" onChange={nameinp} value={text}></input>
            <button onClick={btnClk}>Submit</button>
        </div>
        </>
    );
}


export default AppForm;