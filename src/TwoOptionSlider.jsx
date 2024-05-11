import React from 'react';
import { useTranslation } from 'react-i18next';

const TwoOptionSlider = ({ value, setValue, onChange, option1, option2, color1 }) => {
    const handleSliderChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setValue(selectedValue);
        onChange(selectedValue);
    };
    const { t } = useTranslation();

    return (
        <div className="slider-container" style={{ fontSize: "4vh" }}>
            <label className="option-label" style={{ margin: "1vw", color: color1 }}>{option1}</label>
            <input
                type="range"
                min="0"
                max="1"
                value={value}
                onChange={handleSliderChange}
                className="slider"
                style={{
                    width: "8%",
                    height: "2vh",
                    background: "grey",
                    WebkitTransition: '.2s',
                    transition: 'opacity .2s',
                    borderRadius: '1vh'
                }}
            />
            <label className="option-label" style={{ margin: "1vw", color: color1 }}>{option2}</label>
        </div>
    );
};

export default TwoOptionSlider;