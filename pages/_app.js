import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from '../components/layout/Layout';

import '../styles/globals.css';

const theme = createTheme();
const useStyles = makeStyles((theme) => {

});

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={ theme }>
			<Layout>
				<Component { ...pageProps } />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
