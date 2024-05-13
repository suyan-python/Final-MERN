import { useState } from "react";
// import "./App.css";
// import "./assets/css/vars.css";
// import "./assets/css/theme.css";
// import "./assets/css/layout.css";
// import "./assets/css/style.css";
import { WelcomeLayout } from "./layouts/WelcomeLayout";
import { Login } from "./pages/auth/Login";
import { AppRoutes } from "./routes/AppRoutes";
import { Navbar } from "./components/partials/Navbar";
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

function App() {
  return (
    <>
      <Navbar />
      {/* <WelcomeLayout/> */}
      <AppRoutes />
    </>
  );
}

export default App;
