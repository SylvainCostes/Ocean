// src/components/Heart.js
import React from "react";
import heartImage from "../assets/heart.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Heart = () => {
    const initialStyles = {
        top: "26%", // Position verticale relative
        left: "51.1%", // Position horizontale relative
        width: "1.7%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        transform: "translate(-50%, -50%) translateX(10px)",
        width: "3%",
        opacity: 1,
    };

    const info = {
        title: "Cœur",
        description: "Pompe le sang à travers le corps.",
    };

    return (
        <Organ
            image={heartImage}
            alt="Heart"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Heart;
