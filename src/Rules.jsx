import React from "react";
import "./components/TeamSelection.css";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const Rules = ({setCurrentPage, setCurTeam, backgroundColor, language}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const { t } = useTranslation();
    const rules = "This game is a team game where the end goal is to get " +
    "the most points. The number of teams can be 2, 3, 4, or 5. In the beginning, participants will choose between " + 
    "easy, medium, or hard for the difficulty level, and a certain number of categories " +
    "will be placed on the screen. The first team chooses a category, and they get to answer a question from that category. " +
    "Rotate teams. Each question will be of similar difficulty and worth the same number " + 
    "of points. In the end (when all the categories have run out), whichever team has the most amount of points wins.";
    
    return (
        <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
            <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "11vw"}}>{language === 'English' ? 'Rules' : t('Rules')}</b>
            <div style={{height: "0vh"}}></div>
            <div style={{paddingLeft: "10vh", paddingRight: "10vh"}}>
                <text className="rulesText">{language === 'English' ? rules : t(rules)}</text>
                <div style={{marginTop: "3vw", background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); 
                setCurTeam(1); }} className="changeColorWhite"><b>{language === 'English' ? 'Main Menu' : t('Main Menu')}</b></div>
            </div>
        </div>
    );
};