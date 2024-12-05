// src/components/Heart.js
import React, { useState } from "react";
import heartImage from "../assets/heart.png"; // Assurez-vous que le chemin est correct

const Heart = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "26%", // Position verticale relative
                left: "51.1%", // Position horizontale relative
                transform: isHovered
                    ? "translate(-50%, -50%) translateX(10px)"
                    : "translate(-50%, -50%)", // Centrage exact avec option de translation
                width: isHovered ? "3%" : "1.7%", // Taille réactive
                zIndex: 3,
                opacity: isHovered ? "1" : "0.5", // Opacité réactive
                transition: "all 0.3s ease-in-out", // Transition fluide
                cursor: "pointer", // Indicateur de survol
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={heartImage}
                alt="Heart"
                style={{
                    width: "100%", // Remplit le conteneur
                    height: "auto", // Maintient le ratio d'aspect
                    display: "block",
                }}
            />
        </div>
    );
};

export default Heart;
