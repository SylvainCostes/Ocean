import React from "react";
import Organ from "./Organ";
import brainImage from "../assets/brain.png";

const Brain = () => {
    return (
        <Organ
            image={brainImage}
            alt="Brain"
            initialStyles={{
                position: "absolute",
                top: "9.9%",
                left: "48.2%",
                width: "3.3%",
                zIndex: 2,
                opacity: "50%",
            }}
            hoverStyles={{
                left: "46.5%",
                width: "7%",
                opacity: "100%",
            }}
            info={{
                title: "Cerveau",
                description: "Le cerveau est l'organe central du système nerveux.",
            }}
        />
    );
};

export default Brain;
