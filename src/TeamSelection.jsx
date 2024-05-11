import React from "react";
import "./components/TeamSelection.css";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const TeamSelection = ({setCurrentPage, setCurrentTeams, setCurTeam, setPoints, backgroundColor, language}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const { t } = useTranslation();

    const handleSetTeams = (selectedTeams) => {
        setCurrentTeams(selectedTeams);
        if (selectedTeams === 2) {
            setPoints([0, 0, -1, -1, -1]);
        } else if (selectedTeams === 3) {
            setPoints([0, 0, 0, -1, -1]);
        } else if (selectedTeams === 4) {
            setPoints([0, 0, 0, 0, -1]);
        } else if (selectedTeams === 5) {
            setPoints([0, 0, 0, 0, 0]);
        }
        setCurrentPage("characters");
    };

    return (
        <div className="teamsContainer">
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>{language === 'English' ? 'Team Selection' : t('Team Selection')}</b>
                <div style={{height: "8vh"}}></div>
                <div style={{marginLeft: "8vw"}}>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(2)}><b>2 {language === 'English' ? 'Teams' : t('Teams')}</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(3)}><b>3 {language === 'English' ? 'Teams' : t('Teams')}</b></text>
                </div>
                <div style={{marginTop: "18vh", marginLeft: "8vw"}}>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(4)}><b>4 {language === 'English' ? 'Teams' : t('Teams')}</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className="teamsChoice changeBgClrBlack" onClick={() => handleSetTeams(5)}><b>5 {language === 'English' ? 'Teams' : t('Teams')}</b></text>
                </div>
                <div style={{marginTop: "10vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1); }} 
                    className="changeColorWhite"><b>{language === 'English' ? 'Main Menu' : t('Main Menu')}</b></div>
                </div>
            </div>
        </div>
    );
};