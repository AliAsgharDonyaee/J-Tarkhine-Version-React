import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// import fonts
import "./fonts/ttf/Estedad-Thin.ttf";
import "./fonts/ttf/Estedad-SemiBold.ttf";
import "./fonts/ttf/Estedad-Regular.ttf";
import "./fonts/ttf/Estedad-Medium.ttf";
import "./fonts/ttf/Estedad-Light.ttf";
import "./fonts/ttf/Estedad-ExtraLight.ttf";
import "./fonts/ttf/Estedad-ExtraBold.ttf";
import "./fonts/ttf/Estedad-Bold.ttf";
import "./fonts/ttf/Estedad-Black.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
