import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { CalculatorComponent } from "./components/CalculatorComponent";

function App() {
  return (
    <div className="App">
      <Container>
        <CalculatorComponent />
      </Container>
    </div>
  );
}

export default App;
