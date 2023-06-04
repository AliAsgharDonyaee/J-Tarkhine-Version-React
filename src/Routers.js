import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BranchPage from "./pages/BranchPage";
import MenuPage from "./pages/MenuPage";
import DeputizePage from "./pages/DeputizePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyPage from "./pages/PrivacyPage";
import AskedQuestionsPage from "./pages/AskedQuestionsPage";
import RulesPage from "./pages/RulesPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import MainFoodPage from "./pages/menu-foods/MainFoodPage";
import AppetizerFoodPage from "./pages/menu-foods/AppetizerFoodPage";
import DessertFoodPage from "./pages/menu-foods/DessertFoodPage";
import BeveragesFoodPage from "./pages/menu-foods/BeveragesFoodPage";
import Other from "./pages/Other";

const Routers = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/branch' element={<BranchPage />} />
			<Route path='/menu' element={<MenuPage />}>
				<Route path='/menu/foods' element={<MainFoodPage />} />
				<Route path='/menu/appetizer' element={<AppetizerFoodPage />} />
				<Route path='/menu/dessert' element={<DessertFoodPage />} />
				<Route path='/menu/beverages' element={<BeveragesFoodPage />} />
			</Route>
			<Route path='/deputize' element={<DeputizePage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/contact-us' element={<ContactPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/other' element={<Other />}>
				<Route path='/other/asked-questions' element={<AskedQuestionsPage />} />
				<Route path='/other/rules' element={<RulesPage />} />
				<Route path='/other/privacy' element={<PrivacyPage />} />
			</Route>
			<Route path='*' exact={true} element={<NotFoundPage />} />
		</Routes>
	);
};

export default Routers;
