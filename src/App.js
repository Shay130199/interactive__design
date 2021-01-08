import React,{ useState } from 'react';
import Modal from 'react-modal'
import './App.css';

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  return (
    <div className='App'>
      <button onClick={() => setmodalIsOpen(true) }>Open Me!</button>
      <Modal isOpen={modalIsOpen} shouldonRequestClose={()=>setmodalIsOpen(false)}>
        <h2>
          WOULD YOU LIKE TO SPEAK TO A SPECIALIST....
        </h2>
        <p>Well, your at the right place! At BoostMe we provide all our costumers the best treatment they deserve! </p>
        <div>
          <button onClick={( ) => setmodalIsOpen(false) }>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default App;
