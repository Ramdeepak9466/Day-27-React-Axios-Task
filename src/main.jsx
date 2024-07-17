// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ContextData} from "./ContextFile.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
<ContextData>
<App />
</ContextData>
);
