import React, { useState } from "react";



// ---------- Login Form Submit in ReactJS #35 ------------
// const TwoInputsForm = () =>{

    // const [text , settext] = useState('')
    // const [fulltext , updatedfulltext] = useState('')
    // const nameinp = (event)=>{
    //     settext(event.target.value);
    // }
    
    // const [degree, setdegree] = useState('')
    // const [fulldegree, updatedfulldegree] = useState('')
    // const degreeinput = (event) =>{
    //     setdegree(event.target.value);
    // }

    // const btnClk = () =>{
    //     updatedfulltext(text);
    //     updatedfulldegree(degree);
    // }


    // return(
    //     <>
    //     <div>
    //         <h1>Hello, {fulldegree} {fulltext}!</h1>
    //         <input placeholder="Enter Your Name" type="text" onChange={nameinp} value={text}></input>
    //         <input Placeholder="Enter Your Degree" type="text" onChange={degreeinput} value={degree}></input>
    //         <button onClick={btnClk}>Submit</button>
    //     </div>
    //     </>
    // );

// }



// ------------- Handling Complex Multiple Events ---------------
const TwoInputsForm = () =>{

    const [fullname , setfullname] = useState({
        fname : '',
        lname : '',
        email : ''
    })

    
    const InputEvent = (event)=>{
        const {value, name} = event.target;

        setfullname((prevvalue)=>{

            return { 
                ...prevvalue,
                [name] : value
            }

            // if(name==='fname'){
            //     return{
            //         fname: value,
            //         lname: prevvalue.lname,
            //         email: prevvalue.email
            //     }
            // }
            // else if(name==='lname'){
            //     return{
            //         fname: prevvalue.fname,
            //         lname: value,
            //         email: prevvalue.email
            //     }
            // }
            // else if(name==='email'){
            //     return{
            //         fname: prevvalue.fname,
            //         lname: prevvalue.lname,
            //         email: value
            //     }
            // }
        })
    }

    const btnClk = (event) =>{
        event.preventDefault();
        alert('form submitted')
    }

    return(
        <>
        <form onSubmit={btnClk}>
        <div>
            <h1>Hello, {fullname.fname}{fullname.lname}</h1>
            <p>{fullname.email}</p>
            <input 
                placeholder="Enter Your First Name" 
                type="text" onChange={InputEvent} 
                name="fname" 
                // value={fullname.fname}
            ></input>
            <input 
                Placeholder="Enter Your Last Name" 
                type="text" onChange={InputEvent} 
                name="lname" 
                // value={fullname.lname}
            ></input>
            <input 
                Placeholder="Enter Your Email" 
                type="text" onChange={InputEvent} 
                name="email" 
                // value={fullname.lname}
            ></input>
            <button>Submit</button>
        </div>
        </form>
        </>
    );

}


export default TwoInputsForm;