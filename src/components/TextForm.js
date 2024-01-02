import React, { useState } from 'react'

export default function TextForm(props) {

    const changeToUpperCase = () => {
        if(text != null){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to UpperCase !!", "success")
        }else{
            props.showAlert("Please Enter the text !!", "danger")
        }
    }

    const changeTheTextValue = (event) => {
        // console.log("this is Onchange");
        setText(event.target.value);
    }

    const convertToTilte = () => {
        let arrayOfWords = text.split(" ").map(word => word.toLowerCase());
        let firstLetterCapital = arrayOfWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let newText = firstLetterCapital.join(" ");
        setText(newText);
        props.showAlert("Changed to Title !!", "success")

    }

    const changeToInverse = () => {
        let arrayOfWords = text.split(" ");
        let inverseWords = arrayOfWords.map(word => { 
           return word.split("").map(char => {
                // console.log(typeof(char));
                if(char === char.toUpperCase()){
                    return char.toLowerCase();
                }
                else{
                    return char.toUpperCase();
                }
            }).join("")
        });
        console.log(inverseWords);
        let newText = inverseWords.join(" ");
        setText(newText);
        props.showAlert("Changed to InverseCase !!", "success")

    }

    const changeToLowerCase = () => {
        // console.log("This can convert to Lower Case");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed to LowerCase !!", "success")

    }

    const [text, setText] = useState("");
    return (
        <>        
        <div className="container mt-3" style={{color: props.mode === "light"?"black":"white"}}>
            <div className="row">
                <div className="col-md-12" >
                    <h5><span className="badge custom-badge">{props.name}</span></h5>
                    <textarea className="form-control" style={{backgroundColor: props.mode === "light"?"white":"rgb(11, 11, 49)", color: props.mode === "light"?"black":"white", "::placeholder":{color: "white"}}} id="exampleTextarea" rows="8" placeholder='Enter the text here ...' onChange={changeTheTextValue} value={text}></textarea>
                </div>
            </div>
            <br />
            <button type="button" className="btn btn-primary mx-1" onClick={changeToUpperCase}>{props.uName}</button>
            <button type="button" className="btn btn-primary mx-1" onClick={changeToLowerCase}>{props.lName}</button>
            <button type="button" className="btn btn-primary mx-1" onClick={convertToTilte}>{props.tName}</button>
            <button type="button" className="btn btn-primary mx-1" onClick={changeToInverse}>{props.iName}</button>



        </div>
        <div className="container mt-3" style={{color: props.mode === "light"?"black":"white"}}>
            <h5>Analysis of Data</h5>
            <p>Length of Above paragraph is {text.length} and {text.split(" ").filter(element => element.length!==0).length} words </p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
        </>

    )
}
