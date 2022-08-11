import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();  //Converts entered text to upper case and assigns to newText 
        setText(newText) // Calls function setText used in state array to change state of original text variable
    }

    const handleOnChange = (event)=>{  // allows us to type in the text area
        // console.log("On change");
        setText(event.target.value)  // Used in event handling
    }

    const [text, setText] = useState('Enter text here'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}