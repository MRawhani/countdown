import React from "react";
import Flip from "./components/Flip";

import ModalContent from "./components/ModalContent";
import Home from "./components/Home";

export default function Main() {
  return (
    <div className="container container-fluid">
      <Home />
      <ModalContent />
    </div>
  );
}
