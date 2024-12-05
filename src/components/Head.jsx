// src/components/Head.js
import React from "react";
import headImage from "../assets/head.png"; // Assurez-vous que le chemin est correct

const Head = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "9.5%", // Position verticale relative
                left: "47.57%", // Position horizontale relative
                width: "4.5%", // Taille réactive
                zIndex: 3, // Superposition
                opacity: "0.5", // Opacité initiale
                transition: "all 0.3s ease-in-out", // Transition fluide
                cursor: "pointer", // Indicateur de survol
                transform: "translate(-50%, -50%)", // Centrage exact
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.width = "5.5%";
                e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.width = "4.5%";
                e.currentTarget.style.opacity = "0.5";
            }}
        >
            <img
                src={headImage}
                alt="Head"
                style={{
                    width: "100%", // Remplit le conteneur
                    height: "auto", // Maintient le ratio d'aspect
                    display: "block",
                }}
            />
        </div>
    );
};

export default Head;
