import React from "react";
import "./components/TeamSelection.css";

export const TeamSelection = ({setCurrentPage, setCurrentTeams, setCurTeam, setPoints, backgroundColor}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleSetTeams = (selectedTeams) => {
        setCurrentTeams(selectedTeams);
        if (selectedTeams === 2) {
            setPoints([0, 0, -1, -1, -1]);
        } else if (selectedTeams === 3) {
            setPoints([0, 0, 0, -1, -1]);
        } else if (selectedTeams === 4) {
            setPoints([0, 0, 0, 0, -1]);
        } else if (selectedTeams === 2) {
            setPoints([0, 0, 0, 0, 0]);
        }
        setCurrentPage("characters");
    };

    return (
        <div className="teamsContainer">
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "11vw"}}>Team Selection</b>
                <div style={{height: "8vh"}}></div>
                <div style={{marginLeft: "8vw"}}>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(2)}><b>2 Teams</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(3)}><b>3 Teams</b></text>
                </div>
                <div style={{marginTop: "18vh", marginLeft: "8vw"}}>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(4)}><b>4 Teams</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(5)}><b>5 Teams</b></text>
                </div>
                <div style={{marginTop: "10vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1); }} 
                    className="changeColorWhite"><b>Main Menu</b></div>
                </div>
            </div>
        </div>
    );
};