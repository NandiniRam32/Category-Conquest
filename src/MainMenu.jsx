import React from "react";

export const MainMenu = ({setCurrentPage, setPoints, setCurrentTeam, setClickedCategories}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
        setCurrentTeam(0);
        setClickedCategories((prevClickedCategories) => new Set());
        handleResetPoints();
    };

    const handleResetPoints = () => {
        setPoints([0, 0, 0, 0, 0]);
    }

    return (
        <>
            <div style={{ background: "black", width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>Category Conquest</b>
                <div style={{height: "20vh"}}></div>
                <div style={{background: "#3cbbfa", height: "14vh", width: "14vw", marginLeft: "42vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} onClick={() => handleSetPage("rules")}><b>Rules</b></div>
                <div style={{background: "#c04dfa", height: "14vh", width: "14vw", marginLeft: "42vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetPage("levels")}><b>Play</b></div>
            </div>
        </>
    )
}