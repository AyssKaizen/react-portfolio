import clsx from "clsx";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const WrappedAppWithTheme = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div id="app" className={clsx({ dark: isDark })}>
      {children}
    </div>
  );
};

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <WrappedAppWithTheme>
      <div className="px-4 m-auto max-w-7xl h-full">
        <Component {...pageProps} />
      </div>
    </WrappedAppWithTheme>
  </ThemeProvider>
);

export default MyApp;
