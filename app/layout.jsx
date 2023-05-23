import "@styles/globals.css";

import { Nav, Provider } from "@components";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <div style={{ maxWidth: "1200px", margin: "auto" }}>
            <Nav />
            {children}
          </div>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
