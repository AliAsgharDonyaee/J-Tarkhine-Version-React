import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className='App w-full h-full bg-white'>
			<Header />
			<Routes>
				{/* <Route path='/' element={""} /> */}
				{/* <Route path='/' element={""} /> */}
				{/* <Route path='*' exact={true} element={""} /> */}
			</Routes>
		</div>
	);
}

export default App;
