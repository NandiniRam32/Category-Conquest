import React from "react";
import "./components/TeamSelection.css";

export const PointsSolo = ({setCurrentPage, points, status, setCurrentTeam, teams, currentTeam, clickedCategories, soloName, soloCharacter, soloPoints,
    backgroundColor}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
        if (clickedCategories.size >= 12) {
            setCurrentPage("winnerSolo");
        }
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "6vw"}}>{"Current Score"}</b>
                <div>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={soloCharacter} alt="Solo Character" /></span>
                    <span style={{background: "#ea60fc", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{soloName}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{soloPoints} points</text>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => handleSetPage("categoriesSolo")} 
                    className="changeColorWhite"><b>Next Round</b></div>
                </div>
            </div>
        </>
    )
}