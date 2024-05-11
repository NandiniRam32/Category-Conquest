import React from "react";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const Mode = ({setCurrentPage, backgroundColor, setMode, setSoloPoints, language}) => {
    const { t } = useTranslation();
    const handleSetMode = (selectedMode) => {
        setMode(selectedMode);
        setSoloPoints(0);
        /**if (selectedMode == "solo") {
            setCurrentPage("levelsSolo");
        } else {
            setCurrentPage("levels");
        }*/
        setCurrentPage("classicMode");
    };

    return (
        <>
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <b style={{alignItems: "center", color: "white", fontFamily: "monospace", fontSize: "10vw"}}>{language === 'English' ? 'Choose Your Mode' : 
                t('Choose Your Mode')}</b>
                <div style={{height: "4vh"}}></div>
                <div style={{background: "#33ebff", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh"}} onClick={() => 
                            handleSetMode("classic")} className="changeBgClrBlack"><b>{language === 'English' ? 'Classic' : t('Classic')}</b></div>
                <div style={{background: "#fc47ed", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetMode("arcade")} className="changeBgClrBlack"><b>{language === 'English' ? 
                            'Arcade' : t('Arcade')}</b></div>
                <div style={{background: "#65fc7e", height: "14vh", width: "16vw", marginLeft: "41vw", border: "0.5vw solid white",
                            fontFamily: "monospace", fontSize: "4vw", alignItems: "center", paddingTop: "4vh", 
                            marginTop: "2vh"}} onClick={() => handleSetMode("solo")} className="changeBgClrBlack"><b>{language === 'English' ? 'Solo' : t('Solo')}</b></div>
            </div>
        </>
    )
}