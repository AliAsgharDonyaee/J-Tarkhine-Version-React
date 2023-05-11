import "./App.css";
import Header from "./layout/Header";
import { useEffect } from "react";
import Footer from "./layout/Footer";
import Routers from "./Routers";

function App() {
	useEffect(() => {
		document.title = "به ترخینه خوش آمدید | صفحه اصلی";
	}, []);
	return (
		<div className='App w-full h-full bg-white'>
			<Header />
			<Routers />
			<Footer />
		</div>
	);
}

export default App;
