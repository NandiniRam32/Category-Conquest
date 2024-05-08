import React, { useState } from 'react';

export const NamesSolo = ({setCurrentPage, backgroundColor, setSoloName, soloCharacter}) => {
    const [tempName, setTempName] = useState("");
    
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const continuePage = () => {
        if (checkNameEmptySpace()) {
            setSoloName(tempName);
            handleSetPage("categoriesSolo");
        }
    }

    const handleNameInputChange = (event) => {
        if (event.target.value.length < 21) {
            setTempName(event.target.value);
        }
    };

    const checkNameEmptySpace = () => {
        return (tempName.trim() !== '');
    }

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <div style={{fontSize: "6.4vw", fontWeight: "bold"}}>Choose Your Player Name</div>
                <div style={{height: "12vh", marginTop: "20vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloCharacter} alt="SoloCharacter"/></span>
                    <textarea rows={1} value={tempName} style={{fontSize: "3.6vw", height: "4.4vw"}} placeholder={"Your Name"} 
                            onChange={handleNameInputChange}/>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => continuePage()}><b>Continue</b></div>
                </div>
            </div>
        </>
    )
}