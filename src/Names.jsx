import React, { useState } from 'react';

export const Names = ({setCurrentPage, teams, Team1Character, Team2Character, Team3Character, Team4Character, Team5Character, 
    setTeam1Name, setTeam2Name, setTeam3Name, setTeam4Name, setTeam5Name, backgroundColor}) => {
    const [temp1Name, setTemp1Name] = useState("");
    const [temp2Name, setTemp2Name] = useState("");
    const [temp3Name, setTemp3Name] = useState("");
    const [temp4Name, setTemp4Name] = useState("");
    const [temp5Name, setTemp5Name] = useState("");
    
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const continuePage = () => {
        if (checkTeamNamesEquality() && checkNameEmptySpace()) {
            setTeam1Name(temp1Name);
            setTeam2Name(temp2Name);
            setTeam3Name(temp3Name);
            setTeam4Name(temp4Name);
            setTeam5Name(temp5Name);
            handleSetPage("categories");
        }
    }

    const handleName1InputChange = (event) => {
        if (event.target.value.length < 21) {
            setTemp1Name(event.target.value);
        }
    };

    const handleName2InputChange = (event) => {
        if (event.target.value.length < 21) {
            setTemp2Name(event.target.value);
        }
    };

    const handleName3InputChange = (event) => {
        if (event.target.value.length < 21) {
            setTemp3Name(event.target.value);
        }
    };

    const handleName4InputChange = (event) => {
        if (event.target.value.length < 21) {
            setTemp4Name(event.target.value);
        }
    };

    const handleName5InputChange = (event) => {
        if (event.target.value.length < 21) {
            setTemp5Name(event.target.value);
        }
    };

    const checkTeamNamesEquality = () => {
        if (teams === 5) {
            return ((temp1Name !== temp2Name) && (temp1Name !== temp3Name) && (temp1Name !== temp4Name) && (temp1Name !== temp5Name) && 
            (temp2Name !== temp3Name) && (temp2Name !== temp4Name) && (temp2Name !== temp5Name) && (temp3Name !== temp4Name) && (temp3Name !== 
            temp5Name) && (temp4Name !== temp5Name));
        } else if (teams === 4) {
            return ((temp1Name !== temp2Name) && temp1Name !== temp3Name && temp1Name !== temp4Name && 
            temp2Name !== temp3Name && temp2Name !== temp4Name && temp3Name !== temp4Name);
        } else if (teams === 3) {
            return ((temp1Name !== temp2Name) && temp1Name !== temp3Name && temp2Name !== temp3Name);
        } else if (teams === 2) {
            return (temp1Name !== temp2Name);
        }
    }

    const checkNameEmptySpace = () => {
        if (teams === 5) {
            return ((temp1Name.trim() !== '') && (temp2Name.trim() !== '') && (temp3Name.trim() !== '') && (temp4Name.trim() !== '') && 
                (temp5Name.trim() !== ''));
        } else if (teams === 4) {
            return ((temp1Name.trim() !== '') && (temp2Name.trim() !== '') && (temp3Name.trim() !== '') && (temp4Name.trim() !== ''));
        } else if (teams === 3) {
            return ((temp1Name.trim() !== '') && (temp2Name.trim() !== '') && (temp3Name.trim() !== ''));
        } else if (teams === 2) {
            return ((temp1Name.trim() !== '') && (temp2Name.trim() !== ''));
        }
    }

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <div style={{fontSize: "4.8vw", fontWeight: "bold"}}>Choose Team Names</div>
                <div style={{height: "12vh", marginTop: "2vh"}} className={teams >= 1 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team1Character} alt="Team1Character" 
                            className={teams > 1 ? '' : 'hidden'}/></span>
                    <textarea rows={1} value={temp1Name} style={{fontSize: "3.6vw", height: "4.2vw"}} placeholder={"Team 1 Name"} 
                            onChange={handleName1InputChange}/>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}} className={teams >= 2 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team2Character} alt="Team2Character" 
                            className={teams > 1 ? '' : 'hidden'}/></span>
                    <textarea rows={1} value={temp2Name} style={{fontSize: "3.6vw", height: "4.2vw"}} placeholder={"Team 2 Name"} 
                            onChange={handleName2InputChange}/>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}} className={teams >= 3 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team3Character} alt="Team3Character" 
                            className={teams > 1 ? '' : 'hidden'}/></span>
                    <textarea rows={1} value={temp3Name} style={{fontSize: "3.6vw", height: "4.2vw"}} placeholder={"Team 3 Name"} 
                            onChange={handleName3InputChange}/>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}} className={teams >= 4 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team4Character} alt="Team3Character" 
                            className={teams > 1 ? '' : 'hidden'}/></span>
                    <textarea rows={1} value={temp4Name} style={{fontSize: "3.6vw", height: "4.2vw"}} placeholder={"Team 4 Name"} 
                            onChange={handleName4InputChange}/>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}} className={teams >= 5 ? '' : 'hidden'}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={Team5Character} alt="Team3Character" 
                            className={teams > 1 ? '' : 'hidden'}/></span>
                    <textarea rows={1} value={temp5Name} style={{fontSize: "3.6vw", height: "4.2vw"}} placeholder={"Team 5 Name"} 
                            onChange={handleName5InputChange}/>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => continuePage()}><b>Continue</b></div>
                </div>
            </div>
        </>
    )
}