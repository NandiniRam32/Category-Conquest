import React from "react";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const MainMenu = ({setCurrentPage, setPoints, setCurrentTeam, setClickedCategories, setClickedCharacters, backgroundColor, 
    setBackgroundColor, language}) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
        setCurrentTeam(0);
        setClickedCategories((prevClickedCategories) => new Set());
        handleResetPoints();
        setClickedCharacters((prevClickedCharacters) => new Set());
    };
    const { t } = useTranslation();

    const handleResetPoints = () => {
        setPoints([-1, -1, -1, -1, -1]);
    }

    const handleBackgroundColorChange = (prevColor) => {
        if (prevColor === "black") {
            setBackgroundColor("#300752");
        } else if (prevColor === "#300752") {
            setBackgroundColor("#042085");
        } else if (prevColor === "#042085") {
            setBackgroundColor("#631561");
        } else if (prevColor === "#631561") {
            setBackgroundColor("#632115");
        } else if (prevColor === "#632115") {
            setBackgroundColor("#3ddb6a");
        } else if (prevColor === "#3ddb6a") {
            setBackgroundColor("#9541f0");
        } else if (prevColor === "#9541f0") {
            setBackgroundColor("#0395fc");
        } else if (prevColor === "#0395fc") {
            setBackgroundColor("#d716de");
        } else if (prevColor === "#d716de") {
            setBackgroundColor("black");
        }
    }

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "9vw"}}>{language === 'English' ? 'Category Conquest' : 
                t('Category Conquest')}</b>
                <div style={{height: "20vh"}}></div>
                <div style={{background: "#3cbbfa", height: "14vh", width: "20vw", marginLeft: "42vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} 
                            onClick={() => handleSetPage("rules")} className="changeBgClrBlack"><b>{language === 'English' ? 'Rules' : t('Rules')}</b></div>
                <div style={{background: "#c04dfa", height: "14vh", width: "20vw", marginLeft: "42vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetPage("mode")} className="changeBgClrBlack"><b>{language === 'English' ? 'Play' : 
                            t('Play')}</b></div>
                <div style={{height: "2.8vw"}} />
                <span className="changeBgClr" style={{height: "4vh", width: "32vw", marginLeft: "0vw", marginTop: "2.8vw", 
                            fontFamily: "monospace", fontSize: "2vw"}} onClick={() => 
                            handleSetPage("settings")}><b>{language === 'English' ? 'Settings' : t('Settings')}</b></span>
                <span className="changeBgClr" style={{height: "4vh", width: "32vw", marginLeft: "54vw", 
                            fontFamily: "monospace", fontSize: "2vw", alignItems: "center"}} onClick={() => 
                            handleBackgroundColorChange(backgroundColor)}><b>{language === 'English' ? 'Change Background Color' : t('Change Background Color')}</b></span>
            </div>
        </>
    )
}