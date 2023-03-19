import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Nft from "./routes/Nft";
import Circle from "./routes/Circle";
import Forms from "./components/Forms";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:coinId" element={<Coin />}></Route>
				<Route path="/"  element={<Coins />}></Route>
				<Route path="/nft"  element={<Nft />}></Route>
				<Route path="/circle"  element={<Circle />}></Route>
				<Route path="/forms"  element={<Forms />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
