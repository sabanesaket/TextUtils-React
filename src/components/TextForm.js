import React, {useState} from 'react'

export default function TextForm(props) {

  //handling event
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleUpperCaseClick=()=>{
    // console.log("Uppercase was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  }

  const handleLowerCaseClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  }

  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text has been cleared!","success")
  }

  const handleCopy=()=>{
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text!","success")
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success")
  }

  const[text,setText] = useState("");
  return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        {/*  style={myStyle} */}
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#262b28', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="textBox" rows="8"></textarea>
              <button className="btn btn-primary my-2 mr-2" onClick={handleUpperCaseClick}>Convert To Uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert To Lowercase</button>
              <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
              <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.length>0?`Text has ${text.split(" ").length} words and ${text.length} characters.`:`Text has 0 words and 0 characters`}</p>
            <p>Reading Time Required: {0.008*text.split(" ").length}</p>
            <h2>Preview of Text</h2>
            <p>{text.length>0?text:"Enter something to preview it here!"}</p>
          </div>
        </div>
    </>
  )
}
