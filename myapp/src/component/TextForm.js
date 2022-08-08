import React, { useState } from 'react'
import copy from "copy-to-clipboard";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully converted to Uppercase" , "sucess")
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to LowerCase" , "sucess")
    }
    const handleCopyClick = () => {

        copy(text);
        alert(`You have copied "${text}"`);
        props.showAlert("Text Copied" , "sucess")
    }
    const handleClearClick = () => {

        let newText = ('');
        setText(newText);
        props.showAlert("Successfully text clear" , "sucess")
    }

    const handleOnChange = (event) => {
      
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text below');

    return (
        <>
        
            <div className=" container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className='mb-3'>

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'g#d84c4c' : 'white' ,
                color:props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-3 my-1" onClick={handleUpClick} >Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-3 my-1" onClick={handleLoClick} >Convert to lowerCase</button>
                <button type="button" className="btn btn-success mx-3 my-1" onClick={handleClearClick} >Clear</button>
                <button type="button" className="btn btn-dark mx-3 my-1" onClick={handleCopyClick} >copy to clipboard</button>
            

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> My text Summary</h1>

                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chracters </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read. </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>

        </>
    )
}
