import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BranchPage from "./pages/BranchPage";
import MenuPage from "./pages/MenuPage";
import DeputizePage from "./pages/DeputizePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import PrivacyPage from "./pages/PrivacyPage";
import AskedQuestionsPage from "./pages/AskedQuestionsPage";
import RulesPage from "./pages/RulesPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

const Routers = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/branch' element={<BranchPage />} />
			<Route path='/menu' element={<MenuPage />} />
			<Route path='/deputize' element={<DeputizePage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/contact-us' element={<ContactPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/asked-questions' element={<AskedQuestionsPage />} />
			<Route path='/rules' element={<RulesPage />} />
			<Route path='/privacy' element={<PrivacyPage />} />
			<Route path='*' exact={true} element={<PageNotFound />} />
		</Routes>
	);
};

export default Routers;
