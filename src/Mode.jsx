import React from "react";

export const Mode = ({setCurrentPage, backgroundColor}) => {

    const handleSetMode = (selectedLevel) => {
        setCurrentPage("levels");
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>Choose Your Mode</b>
                <div style={{height: "4vh"}}></div>
                <div style={{background: "#33ebff", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} onClick={() => 
                            handleSetMode("Easy")} className="changeBgClrBlack"><b>Classic</b></div>
                <div style={{background: "#fc47ed", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetMode("Easy")} className="changeBgClrBlack"><b>Arcade</b></div>
                <div style={{background: "#65fc7e", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetMode("Easy")} className="changeBgClrBlack"><b>Solo</b></div>
            </div>
        </>
    )
}