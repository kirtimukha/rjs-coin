import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:coinId" element={<Coin />}></Route>
				<Route path="/"  element={<Coins />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
