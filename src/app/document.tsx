import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="tr">
			<Head>
				<link
					rel="preload"
					href="/_next/static/css/3a341b79e449a54f.css"
					as="style"
					onLoad={(e) => {
						const link = e.currentTarget as HTMLLinkElement;
						link.onload = null;
						link.rel = "stylesheet";
					}}
				/>
				<noscript>
					<link
						rel="stylesheet"
						href="/_next/static/css/3a341b79e449a54f.css"
					/>
				</noscript>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
