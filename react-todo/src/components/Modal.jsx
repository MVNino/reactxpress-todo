import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ buttonLabel, modalTitle = null, task = null }) => {
  const [display, setDisplay] = useState("hidden");

  const closeModal = () => {
    setDisplay("hidden");
  };

  const openModal = () => {
    setDisplay("block");
  };

  return (
    <>
      {/* Modal Background  */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 ${display}`}
      ></div>

      {/* <!-- Modal --> */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white 
      p-8 rounded shadow-lg z-50 ${display}`}
      >
        <h2 className="text-xl font-semibold mb-4">
          {modalTitle || buttonLabel}
        </h2>
        <input className="text-gray-700 mb-4" defaultValue={task.name || ""} />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </div>

      <button
        className="bg-slate-700 text-white p-1 rounded-md"
        onClick={openModal}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default Modal;
