import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Routers from "./Routers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export const App = () => {
	return (
		<div className='App'>
			<ToastContainer />
			<Header />
			<Routers />
			<Footer />
		</div>
	);
};

export default AppWrapper;
