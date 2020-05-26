import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ChakraThemeProvider from "./components/ChakraThemeProvider";

function App() {
  return (
    <ChakraThemeProvider>
      <Home />
    </ChakraThemeProvider>
  );
}

export default App;
