import React, { useState } from 'react';
import PopUpErrorNames from './PopUpErrorNames';
import { useTranslation } from 'react-i18next';

export const Leaderboard = ({setCurrentPage, setPoints, setCurrentTeam, setClickedCategories, setClickedCharacters, backgroundColor, setBackgroundColor, 
    language, backgroundMusic, soloUsers, setSoloUsers}) => {
    const { t } = useTranslation();
    
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    return (
        <>
            <div style={{ background: backgroundColor, marginTop: "0vh", width: "100vw", height: "100vh", color: "white"}}>
                <div style={{fontSize: "4.8vw", fontWeight: "bold"}}>{language === 'English' ? 'Leaderboard' : t('Leaderboard')}</div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloUsers[2]} alt="User 1 Icon" /></span>
                    <text style={{fontSize: "3.6vw", height: "4.4vw"}}>{soloUsers[0]} - {soloUsers[1]}</text>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloUsers[5]} alt="User 2 Icon" /></span>
                    <text style={{fontSize: "3.6vw", height: "4.4vw"}}>{soloUsers[3]} - {soloUsers[4]}</text>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloUsers[8]} alt="User 3 Icon" /></span>
                    <text style={{fontSize: "3.6vw", height: "4.4vw"}}>{soloUsers[6]} - {soloUsers[7]}</text>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloUsers[11]} alt="User 4 Icon" /></span>
                    <text style={{fontSize: "3.6vw", height: "4.4vw"}}>{soloUsers[9]} - {soloUsers[10]}</text>
                </div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloUsers[14]} alt="User 5 Icon" /></span>
                    <text style={{fontSize: "3.6vw", height: "4.4vw"}}>{soloUsers[12]} - {soloUsers[13]}</text>
                </div>
                <div style={{height: "6vh", color: "red", fontSize: "4vh"}}></div>
                <div style={{marginTop: "0vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => handleSetPage("main")}><b>{language === 'English' ? 
                    'Main Menu' : t('Main Menu')}</b></div>
                </div>
            </div>
        </>
    )
}