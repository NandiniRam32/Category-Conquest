import React from "react";

export const Levels = ({setCurrentPage, setCurrentLevel, backgroundColor}) => {

    const handleSetLevel = (selectedLevel) => {
        setCurrentLevel(selectedLevel);
        setCurrentPage("team");
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>Choose Your Level</b>
                <div style={{height: "4vh"}}></div>
                <div style={{background: "#30ff8d", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} onClick={() => 
                            handleSetLevel("Easy")}><b>Easy</b></div>
                <div style={{background: "#3cbbfa", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetLevel("Easy")}><b>Medium</b></div>
                <div style={{background: "#c04dfa", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetLevel("Easy")}><b>Hard</b></div>
            </div>
        </>
    )
}