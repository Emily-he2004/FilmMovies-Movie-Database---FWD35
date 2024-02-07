import React from "react";
import arrowLeft from "../media/arrow-left.svg";
import arrowRight from "../media/arrow-right.svg";
import "../sass/_carousel.scss";

function SliderArrows({ onClick, direction }) {

    return (
        <div className={`arrow arrow-${direction}`} onClick={onClick}>
            {direction === "left" ? (
                <img className="arrow-left" src={arrowLeft} alt="Left Arrow" />
            ) : (
                <img className="arrow-right" src={arrowRight} alt="Right Arrow" />
            )}
        </div>
    );
}

export default SliderArrows;