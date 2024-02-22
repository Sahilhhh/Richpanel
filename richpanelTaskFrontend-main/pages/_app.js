import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</Provider>
	);
}

export default MyApp;
