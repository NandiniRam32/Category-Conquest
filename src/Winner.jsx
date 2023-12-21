import React from "react";

export const Winner = ({setCurrentPage, points, setCurTeam, Team1Character, Team2Character, Team3Character, 
                        Team4Character, Team5Character}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    let winTeam = "1";
    let maxPoints = points[0];
    if (points[1] > points[0]) {
        maxPoints = points[1];
        winTeam = "2";
    } else if (points[1] === points[0]) {
        winTeam = "1/2";
    }
    if (points[2] > maxPoints) {
        maxPoints = points[2];
        winTeam = "3";
    } else if (points[2] === maxPoints) {
        winTeam = winTeam + "/3";
    }
    if (points[3] > maxPoints) {
        maxPoints = points[3];
        winTeam = "4";
    } else if (points[3] === maxPoints) {
        winTeam = winTeam + "/4";
    }
    if (points[4] > maxPoints) {
        maxPoints = points[4];
        winTeam = "5";
    } else if (points[4] === maxPoints) {
        winTeam = winTeam + "/5";
    }

    return (
        <>
            <div style={{ background: "black", width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "7.6vw"}}>Thank You For Playing!</b>
                <div style={{fontSize: "5vw"}}>And the winner is...</div>
                <div style={{height: "16vh"}}></div>
                <span style={{background: "linear-gradient(45deg, #1efc86, #07c1f5, #b026ff, #fb26ff)", height: "12vh", width: "24vw", 
                            border: "0.5vw solid white", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>Team {winTeam}</b></span>
                <text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw",}}> with {maxPoints} points!</text>
                <div style={{height: "12vh", marginTop: "10vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team1Character} alt="Team 1 Character" 
                            className={winTeam.includes("1") ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team2Character} alt="Team 2 Character" 
                            className={winTeam.includes("2") ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team3Character} alt="Team 3 Character" 
                            className={winTeam.includes("3") ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team4Character} alt="Team 4 Character" 
                            className={winTeam.includes("4") ? '' : 'hidden'}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={Team5Character} alt="Team 5 Character" 
                            className={winTeam.includes("5") ? '' : 'hidden'}/></span>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => { handleSetPage("main"); setCurTeam(1); }}><b>Main Menu</b></div>
                </div>
            </div>
        </>
    )
}