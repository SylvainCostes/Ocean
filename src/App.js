// src/App.js
import React from "react";
import OceanScene  from "./components/OceanScene";
import HumanModel from "./components/HumanModel";
import BodyParts from "./components/BodyParts";

function App() {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Arrière-plan océan */}
            {/*<OceanScene />*/}
            <BodyParts />
            {/*<HumanModel />*/}
        </div>
    );
}

export default App;
