import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
  // console.log("you Click" + text);
  let upper = text.toUpperCase()
  setText(upper);
  props.showAlert("Converted to upperCase!" , "success");
  }
  const handleLoClick = () =>{
    // console.log("you Click" + text);
    let lower = text.toLowerCase()
    setText(lower);
    props.showAlert("Converted to lowerCase!" , "success");
    }

  const handleOnChange = (event) =>{
  // console.log("you click on Onchange");
  setText(event.target.value);
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
    props.showAlert("Text Clear!" , "success");
 }


  const handleToCopyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!" , "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Space!" , "success");
}


  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleToCopyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p >{((text.trim().split(/\s+/)).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </> 
  )
}
