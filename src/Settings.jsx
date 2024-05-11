import React, { useState, useEffect } from 'react';
import TwoOptionSlider from './TwoOptionSlider';
import { useTranslation } from 'react-i18next';

export const Settings = ({ setCurrentPage, setCurTeam, backgroundColor, language, setLanguage, backgroundMusic, setBackgroundMusic, audio }) => {
    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const { t } = useTranslation();

    const [sliderValue, setSliderValue] = useState(0);
    const [languageSliderValue, setLanguageSliderValue] = useState(() => {
        return language === 'English' ? 0 : 1;
    });

    const [bgdMusicSliderValue, setBgdMusicSliderValue] = useState(() => {
        return backgroundMusic === 0 ? 0 : 1;
    });

    const handleSliderChangeLanguage = (value) => {
        setSliderValue(value);
        if (value === 0) {
            setLanguage("English");
        } else {
            setLanguage("Spanish");
        }
    };

    const handleSliderChangeBgdMusic = (value) => {
        setSliderValue(value);
        if (value === 0) {
            setBackgroundMusic(0);
            audio.pause();
        } else {
            setBackgroundMusic(1);
            audio.play();
        }
    };

    return (
        <div style={{ background: backgroundColor, width: '100vw', height: '100vh', color: 'white', alignContent: 'center' }}>
            <b style={{ alignItems: 'center', color: 'white', fontFamily: 'monospace', fontSize: '11vw' }}>{language === 'English' ? 'Settings' : t('Settings')}</b>
            <div style={{ height: '0vh' }}></div>
            <div style={{ paddingLeft: '10vh', paddingRight: '10vh' }}>
                <text className="rulesText" style={{ textDecoration: "underline", color: "#df96fa", fontWeight: "bold" }}>
                    {language === 'English' ? 'Language' : t('Language')}
                </text>
                <div style={{ marginTop: '2vh', marginBottom: "8vh" }}>
                    <TwoOptionSlider
                        value={languageSliderValue}
                        setValue={setLanguageSliderValue}
                        onChange={handleSliderChangeLanguage}
                        option1={language === 'English' ? 'English' : t('English')}
                        option2={language === 'English' ? 'Spanish' : t('Spanish')}
                        color1={"#df96fa"}
                    />
                </div>
                <text className="rulesText" style={{ textDecoration: "underline", color: "#df96fa", marginTop: "2vw", fontWeight: "bold" }}>{language === 'English' ? 'Background Music' : t('Background Music')}</text>
                <div style={{ marginTop: '0vh' }}>
                    <TwoOptionSlider
                        value={bgdMusicSliderValue}
                        setValue={setBgdMusicSliderValue}
                        onChange={handleSliderChangeBgdMusic}
                        option1={language === 'English' ? 'Off' : t('Off')}
                        option2={language === 'English' ? 'On' : t('On')}
                        color1={"#df96fa"}
                    />
                </div>
                <div style={{ marginTop: '2vh' }}>
                    <div style={{ background: '#44d8fc', fontSize: '3vw', marginTop: '2vh' }} onClick={() => { handleSetPage('main'); setCurTeam(1); }} className="changeColorWhite"><b>{language === 'English' ? 'Main Menu' : t('Main Menu')}</b></div>
                </div>
            </div>
        </div>
    );
};