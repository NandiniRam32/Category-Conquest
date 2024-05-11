import React from "react";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const WinnerSolo = ({setCurrentPage, soloPoints, setSoloPoints, soloCharacter, soloName, backgroundColor, clickedCategories, setCurTeam, language, soloUsers, 
                    setSoloUsers}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const { t } = useTranslation();
    const handleChangeLeaderboard = () => {
        if (soloPoints >= soloUsers[1]) {
            setSoloUsers([soloName, soloPoints, soloCharacter, soloUsers[0], soloUsers[1], soloUsers[2], soloUsers[3], soloUsers[4], soloUsers[5], soloUsers[6], 
                soloUsers[7], soloUsers[8], soloUsers[9], soloUsers[10], soloUsers[11]]);
        } else if (soloPoints >= soloUsers[4]) {
            setSoloUsers([soloUsers[0], soloUsers[1], soloUsers[2], soloName, soloPoints, soloCharacter, soloUsers[3], soloUsers[4], soloUsers[5], soloUsers[6], 
                soloUsers[7], soloUsers[8], soloUsers[9], soloUsers[10], soloUsers[11]]);
        } else if (soloPoints >= soloUsers[7]) {
            setSoloUsers([soloUsers[0], soloUsers[1], soloUsers[2], soloUsers[3], soloUsers[4], soloUsers[5], soloName, soloPoints, soloCharacter, soloUsers[6], 
                soloUsers[7], soloUsers[8], soloUsers[9], soloUsers[10], soloUsers[11]]);
        } else if (soloPoints >= soloUsers[10]) {
            setSoloUsers([soloUsers[0], soloUsers[1], soloUsers[2], soloUsers[3], soloUsers[4], soloUsers[5], soloUsers[6], soloUsers[7], soloUsers[8], soloName, 
                soloPoints, soloCharacter, soloUsers[9], soloUsers[10], soloUsers[11]]);
        } else if (soloPoints >= soloUsers[13]) {
            setSoloUsers([soloUsers[0], soloUsers[1], soloUsers[2], soloUsers[3], soloUsers[4], soloUsers[5], soloUsers[6], soloUsers[7], soloUsers[8], soloUsers[9], 
                soloUsers[10], soloUsers[11], soloName, soloPoints, soloCharacter]);
        }
    }

    /**<span style={{background: "linear-gradient(45deg, #1efc86, #07c1f5, #b026ff, #fb26ff)", width: "24vw", 
                            border: "0.5vw solid white", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>Team {winTeam}</b></span>*/

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "7.6vw"}}>{language === 'English' ? 
                'Thank You For Playing!' : t('Thank You For Playing!')}</b>
                <div style={{fontSize: "5vw"}}>{language === 'English' ? 'Your final score is...' : t('Your final score is...')}</div>
                <div style={{height: "8vh"}}></div>
                <span style={{width: "60vw", fontFamily: "monospace", fontSize: "4vw", alignItems: "center", 
                            padding: "4vh"}}><b>{soloName}</b></span>
                <div><text style={{marginLeft: "8vw", fontFamily: "monospace", fontSize: "4vw", marginTop: "2vh"}}>{soloPoints} {language === 'English' ? 
                'point(s)' : t('point(s)')}!</text></div>
                <div style={{height: "12vh", marginTop: "2vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={soloCharacter} alt="Solo Character"/></span>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("leaderboard"); setCurTeam(1); handleChangeLeaderboard();}} 
                    className="changeColorWhite"><b>{language === 'English' ? 'Leaderboard' : t('Leaderboard')}</b></div>
                </div>
            </div>
        </>
    )
}