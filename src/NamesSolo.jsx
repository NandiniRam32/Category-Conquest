import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const NamesSolo = ({setCurrentPage, backgroundColor, setSoloName, soloCharacter, language}) => {
    const [tempName, setTempName] = useState("");
    const errorMessage = "Error: Please make sure your name isn't just empty space";
    let [error, setError] = useState(0);
    const { t } = useTranslation();
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const continuePage = () => {
        if (checkNameEmptySpace()) {
            setSoloName(tempName);
            handleSetPage("categoriesSolo");
        } else {
            setError(1);
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
                <div style={{fontSize: "6.4vw", fontWeight: "bold"}}>{language === 'English' ? 'Choose Your Player Name' : t('Choose Your Player Name')}</div>
                <div style={{height: "20vh", color: "red", fontSize: "6vh", opacity: (error ? 100 : 0)}}>{language === 'English' ? errorMessage : t(errorMessage)}</div>
                <div style={{height: "12vh", marginTop: "0vh"}}>
                    <span><img style={{marginRight: "4vw", height: "10vh"}} src={soloCharacter} alt="SoloCharacter"/></span>
                    <textarea rows={1} value={tempName} style={{fontSize: "3.6vw", height: "4.4vw"}} placeholder={language === 'English' ? 'Your Name' : t('Your Name')} 
                            onChange={handleNameInputChange}/>
                </div>
                <div style={{marginTop: "4vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw", color: "black"}} onClick={() => continuePage()}><b>{language === 'English' ? 
                    'Continue' : t('Continue')}</b></div>
                </div>
            </div>
        </>
    )
}