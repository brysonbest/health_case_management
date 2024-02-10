import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { PrimeReactProvider } from "primereact/api";
import theme from "./theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Case Management Application - Community Services Team ",
  description:
    "Provides the Community Services Team to quick access to their caseload and case management tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <PrimeReactProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PrimeReactProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
