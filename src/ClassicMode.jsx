import React from "react";
import "./components/TeamSelection.css";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const ClassicMode = ({setCurrentPage, setCurTeam, backgroundColor, mode, language}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const solo = (mode === "solo" ? "Solo" : "");
    let title = (mode === "classic" ? "Classic Mode" : (mode === "arcade" ? "Arcade Mode" : "Solo Mode"));
    let message = (mode === "classic" ? "No changes here. Besides the main rules, each team gets to choose a category to answer for their turn. If they get it " + 
    "right, they get a point, but if they don’t, nothing happens. After that, the turn automatically changes to the next team. There are no time limits here, so make " + 
    "sure you make the right choices. Good luck!" : (mode === "arcade" ? "Here, we’ve added a timer. Besides the main rules, each team gets to choose a category to " + 
    "answer for their turn. If they get it right, they get a point, but if they don’t, nothing happens. After that, the turn automatically changes to the next team. " + 
    "If your team fails to answer the question by the time the timer runs out, you lose the point automatically. Good luck!" : "Now you can play by yourself! You get " + 
    "15 tries per category, one each second, for every category. You keep going until time runs out. Good luck!"));
    const { t } = useTranslation();
    
    return (
        <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
            <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "11vw"}}>{language === 'English' ? title : t(title)}</b>
            <div style={{height: "0vh"}}></div>
            <div style={{paddingLeft: "10vh", paddingRight: "10vh"}}>
                <text className="rulesText">{language === 'English' ? message : t(message)}</text>
                <div style={{marginTop: "2vh"}}>
                    <div style={{background: "#d459f0", fontSize: "3vw", marginTop: "4vh"}} onClick={() => { handleSetPage("levels" + solo); setCurTeam(1);}} 
                    className="changeColorWhite"><b>{language === 'English' ? "Continue" : t("Continue")}</b></div>
                    <div style={{background: "#44d8fc", fontSize: "3vw", marginTop: "2vh"}} onClick={() => { handleSetPage("main"); setCurTeam(1);}} 
                    className="changeColorWhite"><b>{language === 'English' ? "Main Menu" : t("Main Menu")}</b></div>
                </div>
            </div>
        </div>
    );
};