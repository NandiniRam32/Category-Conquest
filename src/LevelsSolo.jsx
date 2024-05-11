import React from "react";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const LevelsSolo = ({setCurrentPage, setCurrentLevel, backgroundColor, language}) => {
    const { t } = useTranslation();
    const handleSetLevel = (selectedLevel) => {
        setCurrentLevel(selectedLevel);
        setCurrentPage("charactersSolo");
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>{language === 'English' ? 'Choose Your Level' : 
                t('Choose Your Level')}</b>
                <div style={{height: "4vh"}}></div>
                <div style={{background: "#30ff8d", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} onClick={() => 
                            handleSetLevel("Easy")} className="changeBgClrBlack"><b>{language === 'English' ? 'Easy' : t('Easy')}</b></div>
                <div style={{background: "#3cbbfa", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetLevel("Medium")} className="changeBgClrBlack"><b>{language === 'English' ? 
                            'Medium' : t('Medium')}</b></div>
                <div style={{background: "#c04dfa", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetLevel("Hard")} className="changeBgClrBlack"><b>{language === 'English' ? 
                            'Hard' : t('Hard')}</b></div>
            </div>
        </>
    )
}