import React from "react";

const InfoCard = ({ title, description, isVisible }) => {
    return (
        <div
            style={{
                position: "fixed", // Toujours en haut à gauche
                top: "0",
                left: "10px",
                width: "250px",
                padding: "15px 20px", // Espacement interne
                backgroundColor: "#f9f5dc", // Couleur parcheminée
                backgroundImage: "url('https://i.imgur.com/OqsKPPE.png')", // Texture vintage
                backgroundSize: "cover", // Ajustement de l'image
                backgroundRepeat: "no-repeat",
                border: "2px solid #8b5e3c", // Bordure marron
                borderRadius: "12px", // Coins arrondis
                boxShadow: "0 8px 10px rgba(0, 0, 0, 0.2)", // Ombre subtile
                zIndex: 100,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-100%)", // Effet de descente
                transition: "all 0.5s ease-in-out", // Animation fluide
                fontFamily: "'Cormorant Garamond', serif", // Police vintage
                color: "#4a342e", // Couleur du texte
            }}
        >
            {isVisible && (
                <>
                    <h4 style={{ margin: "0 0 10px", fontSize: "1.5em", fontWeight: "bold" }}>
                        {title}
                    </h4>
                    <p style={{ margin: 0, fontSize: "1em", lineHeight: "1.5" }}>
                        {description}
                    </p>
                </>
            )}
        </div>
    );
};

export default InfoCard;
