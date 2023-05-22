import React, { useState } from 'react';


export default function TextForm(props) {
      
    const handleUpClick =()=>{
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText (newText)
    }

    const handleLoClick =()=>{
        // console.log("uppercase was clicked" + text);
         let newText = text.toLowerCase();
         setText (newText)
     }
     
    const handleOnChange=(event)=>{
       // console.log("on change");
        setText(event.target.value);
    }

  //   const handlerfuncTranslate = async () =>{
  //     translate.engine = "google";
  //     translate.key = process.env.GOOGLE_KEY;

  //     const textvalue = await translate(text,"fr");
  //     setText(textvalue);
  // };
    
  
   const speak =() =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);

   };
    const [text, setText] = useState('Enter text here');
    

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'? 'white':'#111528'}}>
       <h1>{props.heading}</h1>
        <div className="mb-3">
       {/* <label for="MyBox" class="form-label">Example textarea</label>*/}
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? 'gray':'white',color : props.mode==='dark'? 'white':'#111528'}} id="MyBox" rows="8"></textarea>
        </div>
         
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx -2" onClick={handleLoClick}>Convert to Lowercase</button>
        {/*  <button className="btn btn-primary" onClick={handlerfuncTranslate}>Translate</button> */}
         <button className="mx-2 btn btn-primary"  onClick={speak}> text to speak </button>
        

    </div>

    <div className="contanor my-3"  style={{color : props.mode==='dark'? 'white':'#111528'}} >

        <h1>Your word Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>




    </div>
    </>
  )
}
