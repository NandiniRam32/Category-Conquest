import React from "react";

export const WinnerSolo = ({setCurrentPage, soloPoints, setSoloPoints, soloCharacter, soloName, backgroundColor, clickedCategories, setCurTeam}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    /**<span style={{background: "linear-gradient(45deg, #1efc86, #07c1f5, #b026ff, #fb26ff)", width: "24vw", 
                            border: "0.5vw solid white", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>Team {winTeam}</b></span>*/

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "7.6vw"}}>Thank You For Playing!</b>
                <div style={{fontSize: "5vw"}}>Your final score is...</div>
                <div style={{height: "8vh"}}></div>
                <span style={{width: "60vw", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>{soloName}</b></span>
                <div><text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw", marginTop: "2vh"}}>{soloPoints} points!</text></div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={soloCharacter} alt="Solo Character"/></span>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1);}} 
                    className="changeColorWhite"><b>Main Menu</b></div>
                </div>
            </div>
        </>
    )
}