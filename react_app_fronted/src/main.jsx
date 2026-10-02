import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductApp } from "./components/ProductApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductApp title={"LABORATORIO WILCAST"} />
  </StrictMode>,
);
