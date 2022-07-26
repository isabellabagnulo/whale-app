import './Modal.css'

function Modal({ setOpenModal, action }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <button
            className='close-button'
              onClick={() => {
                setOpenModal(false);
              }}
          >
            <div className='close-icon'>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1L10.5 11M10.5 1L0.5 11" stroke="#3C3B36"/>
              </svg>
            </div>
          </button>
          <h2 className="title">Sei sicuro di voler confermare il ritiro del libro?</h2>
          <p className="body opacity-70">Cliccando su conferma eliminerai il libro dalle disponibilità del locale</p>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Annulla
            </button>
            <button onClick={action} id="cancelBtn">Conferma</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;