import React from "react";
import "./components/TeamSelection.css";
import Team1Character from './components/Team1Character.jpg';
import Team2Character from './components/Team2Character.jpg';
import Team3Character from './components/Team3Character.jpg';
import Team4Character from './components/Team4Character.jpg';
import Team5Character from './components/Team5Character.jpg';

export const Points = ({setCurrentPage, points, status, setCurrentTeam, teams, currentTeam, clickedCategories}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentTeam((currentTeam + 1) % teams);
        setCurrentPage(selectedPage);
        if (clickedCategories.size >= 12) {
            setCurrentPage("winner");
        }
    };

    return (
        <>
            <div style={{ background: "black", width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "6vw"}}>{status}</b>
                <div>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team1Character} alt="Team 1 Character" /></span>
                    <span style={{background: "#ea60fc", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>Team 1</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[0]} points</text>
                </div>
                <div style={{marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team2Character} alt="Team 2 Character" /></span>
                    <span style={{background: "#3dfc99", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>Team 2</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[1]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 3 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team3Character} alt="Team 3 Character" /></span>
                    <span style={{background: "#3cbbfa", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>Team 3</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[2]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 4 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team4Character} alt="Team 4 Character" /></span>
                    <span style={{background: "#40f59a", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>Team 4</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[3]} points</text>
                </div>
                <div style={{marginTop: "2vh"}} className={teams >= 5 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team5Character} alt="Team 5 Character" /></span>
                    <span style={{background: "#bc4cfc", height: "8vh", width: "16vw", border: "0.5vw solid white",
                                fontFamily: "monospace", fontSize: "3vw", alignItems: "center", padding: "1vh"}}><b>Team 5</b></span>
                    <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}>{points[4]} points</text>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => handleSetPage("categories")}><b>Next Round</b></div>
                </div>
            </div>
        </>
    )
}