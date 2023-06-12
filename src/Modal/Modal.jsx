
const Modal = ({ isOpen,  children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">{children}</div>
      <div
        className="inset-0 "
  
      ></div>
    </div>
  );
};

export default Modal;