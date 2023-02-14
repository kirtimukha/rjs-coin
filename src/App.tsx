import React from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme} />
			<div className="App">new projectsc</div>
		</>
	);
};

export default App;
