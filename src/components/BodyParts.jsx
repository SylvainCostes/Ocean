import React from "react";
import Head from "./Head";
import Heart from "./Heart";
import HumanModel from "./HumanModel";
import Lung from "./Lung";
import Brain from "./Brain";


const BodyParts = () => {
    return (
        <div
            style={{
                position: "relative", // Important pour aligner les parties du corps
                width: "100%",
                height: "100vh",
                zIndex: 2, // Assurez-vous que c'est supérieur au z-index d'OceanBackground
            }}
        >
            {/* Autres parties du corps */}
            <Head />
            <Heart />
            <Lung />
            <Brain />
            <HumanModel />
        </div>
    );
};

export default BodyParts;
