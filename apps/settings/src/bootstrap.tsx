import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "host/RemoteEntry";
import "./bootstrap.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </React.StrictMode>
  );
}
