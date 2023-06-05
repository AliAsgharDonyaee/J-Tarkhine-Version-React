import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Routers from "./Routers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "react-auth-kit";

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<AuthProvider
				authType={"cookie"}
				authName={"_auth"}
				cookieDomain={window.location.hostname}
				cookieSecure={false}
			>
				<App />
			</AuthProvider>
		</Provider>
	);
};

export const App = () => {
	const location = useLocation();

	return (
		<div className='App'>
			{location.pathname === "/signup" ||
			location.pathname === "/login" ||
			location.pathname === "/forgot-password" ? (
				<Routes>
					<Route path='/login' element={<Loginpage />} />
					<Route path='/signup' element={<Signuppage />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			) : (
				<>
					<ToastContainer />
					<Header />
					<Routers />
					<Footer />
				</>
			)}
		</div>
	);
};

export default AppWrapper;
