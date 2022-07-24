import {ThemeProvider} from "next-themes";
import {AppProps} from "next/app";
import AppShell from "../components/AppShell";
import "../styles/globals.css";

const App = ({Component, pageProps}: AppProps) => (
  <ThemeProvider>
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  </ThemeProvider>
);

export default App;
