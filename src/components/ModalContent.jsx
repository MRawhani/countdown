import React from 'react'
import Stepper from '../Stepper'

export default function ModalContent() {
    const closeModal = () => {
            
        document.getElementById('myModal').classList.add('dis-none')
        document.getElementById('myModal').classList.remove('dis-block')
    
      };
    return (
        <div
        //  style={{ display: `${open ? "block" : "none"}` }}
          id="myModal"
          class="modal"
        >
          <div class="modal-content">
            <div class="modal-header">
              <span onClick={closeModal} class="close">
                &times;
              </span>
  
              <h2>Modal Header</h2>
            </div>
            <div class="modal-body">
       <Stepper />
            </div>
            <div class="modal-footer">
              <h3>Modal Footer</h3>
            </div>
          </div>
        </div>
   
    )
}
