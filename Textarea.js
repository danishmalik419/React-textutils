import React, {useState} from 'react'

export default function Textarea(props) {
const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
}

const handlelwClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase","success");
}

const handlectClick = () =>{
    setText("")
    props.showAlert("Text has been Cleared","success");
}

const handlecClick = () =>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copied to clipboard","success");
}

const handlersClick = () =>{
    const removeSpace = text.trim(); 
    const newText = removeSpace.replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert("Extra space has been removed","success");
}

const handleOnChange = (event) =>{
    setText(event.target.value);
}

    const [text, setText] = useState('');//Textarea  
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}  >
        <h1>{props.heading}</h1>
        <div className="mb-3"></div>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#042743':'white' , color: props.mode==='dark'? 'white':'black' }} value= {text} rows="10"></textarea>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-danger mx-2 my-2" onClick={handlelwClick}>Convert to LowerCase</button>
  <button className="btn btn-success mx-2 my-2" onClick={handlersClick}>Remove extra space</button>
  <button className="btn btn-secondary mx-2 my-2" onClick={handlectClick}>Clear Text</button>
  <button className="btn btn-dark mx-2 my-2" onClick={handlecClick}>Copy Text</button>
</div>

<div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
    <h2>Your text summary here</h2>
    <p>{text.split(" ").length} Word and {text.length} Characters</p>
    <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Text Preview</h2>
    <p>{text.length>0?text:"Enter something the textarea"}</p>
</div>
</>
  )
}
