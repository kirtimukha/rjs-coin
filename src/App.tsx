import React from "react";
// import "./App.css";

import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";
import Router from "./Router";

const App = () => {
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme} />
			{/*<div className="App">new project</div>*/}
			<Router/>
		</>
	);
};

export default App;
