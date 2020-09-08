import React from "react";
import Flip from "./components/Flip";
import Modal from "./components/Modal";
import FlipNew from "./components/FlipNew";
import ModalContent from "./components/ModalContent";

export default function Main() {
      
  return (
    <div className="container container-fluid">
      <Flip />
    <ModalContent />
      <div
style={{
      background: `url(${process.env.PUBLIC_URL}/images/wave.svg) center no-repeat`,

}}
>
</div>
<div
style={{
      background: `url(${process.env.PUBLIC_URL}/images/logo-colored.svg) center no-repeat`,

}}
>
</div>
       </div>
  );
}
