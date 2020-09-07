import React from "react";

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const openModal = () => {
    setOpen(true);
    if(document.getElementById('myModal')){

      document.getElementById('myModal').classList.remove('dis-none')
              document.getElementById('myModal').classList.add('dis-block')
    }
  };
  
  return (
    <div>
      <button onClick={openModal} id="myBtn">
        Open Modal
      </button>

        </div>
  );
}
