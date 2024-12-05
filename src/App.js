// src/App.js
import React from "react";
import BodyParts from "./components/BodyParts";
import OceanScene from "./components/OceanScene"; // Si vous souhaitez intégrer la scène océanique
import "./App.css"; // Si vous utilisez des styles globaux

function App() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Scène océanique en arrière-plan */}
            <OceanScene />

            {/* Partie supérieure des organes */}
            <BodyParts />

            {/* Ajoutez d'autres composants si nécessaire */}
        </div>
    );
}

export default App;
