// src/components/Brain.js
import React from "react";
import brainImage from "../assets/brain.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Brain = () => {
    const initialStyles = {
        top: "10%", // Position verticale relative
        left: "44.5%", // Position horizontale relative
        width: "4%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        left: "45.5%",
        width: "7%",
        opacity: 1,
    };

    const info = {
        title: "Cerveau",
        description: "Le centre de contrôle du corps humain.",
    };

    return (
        <Organ
            image={brainImage}
            alt="Brain"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Brain;
