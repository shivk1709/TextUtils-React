import React from 'react'

// let myStyle = {
//     color: "white",
//     backgroundColor: "black",
//     border: "1px solid white"
// }

export default function About(props) {

    // const [myStyle, newStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })

    // const [darkModeButton, lightButton] = useState("Enable Dark Mode");


    // const darkMode = () => {
    //     console.log("Invoking method");
    //     if (myStyle.color === "black") {
    //          newStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         lightButton("Enable Light Mode");
    //     }
    //     else {
    //          newStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         lightButton("Enable Dark Mode");

    //     }
    // }

    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "rgb(11, 11, 49)" : "white",
        border: `1px solid ${props.mode === "dark" ? "white" : "black"}`
    }

    return (
        <>
            <div className="container">
                <div className="heading" style={myStyle}>
                    <h1 className='ml-4'>About Page</h1>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
                {/* <button type="button" onClick={darkMode} className="btn btn-primary my-2" >{darkModeButton}</button> */}
            </div>
        </>

    )
}
