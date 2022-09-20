import React from "react";
import { render } from "react-dom";
import App from "./App";


render (
    <React.StrictMode>  
        <App />
    </React.StrictMode>,
    
    document.getElementById("root")
)
// StrictMode - инструмент для обнаружения потенциальных проблем приложения. Мониторятся только компоненты, уоторые находятся внутри данного тега.