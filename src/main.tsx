import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./app.css";

import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "your-domain.dev",      // ← set your real domain when deployed
  trackLocalhost: true,
});
plausible.enableAutoPageviews();  // outbound links can be tracked manually via trackEvent

export { plausible }; // optional: so components can import and track events

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
