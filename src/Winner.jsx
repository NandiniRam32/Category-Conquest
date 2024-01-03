import React from "react";

export const Winner = ({setCurrentPage, points, setCurTeam, Team1Character, Team2Character, Team3Character, 
                        Team4Character, Team5Character, Team1Name, Team2Name, Team3Name, Team4Name, Team5Name, teams, 
                        backgroundColor}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    let winTeam = Team1Name;
    let maxPoints = points[0];
    if (points[1] > points[0]) {
        maxPoints = points[1];
        winTeam = Team2Name;
    } else if (points[1] === points[0]) {
        winTeam = Team1Name + "/" + Team2Name;
    }
    if (points[2] > maxPoints) {
        maxPoints = points[2];
        winTeam = Team3Name;
    } else if (points[2] === maxPoints) {
        winTeam = winTeam + "/" + Team3Name;
    }
    if (points[3] > maxPoints) {
        maxPoints = points[3];
        winTeam = Team4Name;
    } else if (points[3] === maxPoints) {
        winTeam = winTeam + "/" + Team4Name;
    }
    if (points[4] > maxPoints) {
        maxPoints = points[4];
        winTeam = Team5Name;
    } else if (points[4] === maxPoints) {
        winTeam = winTeam + "/" + Team5Name;
    }

    /**<span style={{background: "linear-gradient(45deg, #1efc86, #07c1f5, #b026ff, #fb26ff)", width: "24vw", 
                            border: "0.5vw solid white", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>Team {winTeam}</b></span>*/

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "7.6vw"}}>Thank You For Playing!</b>
                <div style={{fontSize: "5vw"}}>And the winner is...</div>
                <div style={{height: "8vh"}}></div>
                <span style={{width: "60vw", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>Team {winTeam}</b></span>
                <div><text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw", marginTop: "2vh"}}> with {maxPoints} points!</text></div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team1Character} alt="Team 1 Character" 
                            className={winTeam.includes(Team1Name) ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team2Character} alt="Team 2 Character" 
                            className={winTeam.includes(Team2Name) ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team3Character} alt="Team 3 Character" 
                            className={winTeam.includes(Team3Name) && teams >= 3 ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team4Character} alt="Team 4 Character" 
                            className={winTeam.includes(Team4Name) && teams >= 4 ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team5Character} alt="Team 5 Character" 
                            className={winTeam.includes(Team5Name) && teams >= 5 ? '' : 'hidden'}/></span>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1);}} 
                    className="changeColorWhite"><b>Main Menu</b></div>
                </div>
            </div>
        </>
    )
}