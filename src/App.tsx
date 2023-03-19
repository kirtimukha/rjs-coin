import React from "react";
import { isDarkAtom } from "./atom";
import { useRecoilValue } from "recoil";
import { darkTheme } from "./theme";
import Router from "./Router";
import {ThemeProvider} from "styled-components";
import {createGlobalStyle} from "styled-components";
const GlobalStlye = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
	}
	menu, ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	body{
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		font-size:1rem;
		background-color: ${(props) => props.theme.bgColor};
		color: ${(props) => props.theme.textColor}
	}
	a{text-decoration: none; color: inherit;}
	*{box-sizing: border-box}
`
const App = () => {
	return (
		<>
			<GlobalStlye/>
			{/*<div className="App">new project</div>*/}
			<Router/>

		</>
	);
};

export default App;
