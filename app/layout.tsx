import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Jua } from "next/font/google";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const jua = Jua({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className={`flex h-screen overflow-hidden ${jua.className}`}>
						<Sidebar />
						<div className="flex flex-col flex-grow h-screen">
							<Navbar />
							<main className="h-full max-h-full mb-10 mr-10">
								{children}
							</main>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
