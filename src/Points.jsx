import React from "react";
import "./components/TeamSelection.css";

export const Points = ({setCurrentPage, points, status, setCurrentTeam, teams, currentTeam, clickedCategories, Team1Character, 
    Team2Character, Team3Character, Team4Character, Team5Character, Team1Name, Team2Name, Team3Name, Team4Name, Team5Name, 
    backgroundColor}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentTeam((currentTeam + 1) % teams);
        setCurrentPage(selectedPage);
        if (clickedCategories.size >= 12) {
            setCurrentPage("winner");
        }
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "6vw"}}>{status}</b>
                <div>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team1Character} alt="Team 1 Character" /></span>
                    <span style={{background: "#ea60fc", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{Team1Name}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[0]} points</text>
                </div>
                <div style={{marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team2Character} alt="Team 2 Character" /></span>
                    <span style={{background: "#3dfc99", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{Team2Name}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[1]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 3 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team3Character} alt="Team 3 Character" /></span>
                    <span style={{background: "#3cbbfa", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{Team3Name}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[2]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 4 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team4Character} alt="Team 4 Character" /></span>
                    <span style={{background: "#40f59a", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{Team4Name}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[3]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 5 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team5Character} alt="Team 5 Character" /></span>
                    <span style={{background: "#bc4cfc", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>{Team5Name}</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[4]} points</text>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => handleSetPage("categories")} 
                    className="changeColorWhite"><b>Next Round</b></div>
                </div>
            </div>
        </>
    )
}