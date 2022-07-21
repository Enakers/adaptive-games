import {SessionProvider} from "next-auth/react";
import {ThemeProvider} from "next-themes";
import {AppProps} from "next/app";
import Layout from "~/components/Layout";
import "~/styles/globals.css";

const App = ({Component, pageProps: {session, ...pageProps}}: AppProps) => (
  <SessionProvider session={session}>
    <ThemeProvider enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </SessionProvider>
);

export default App;
