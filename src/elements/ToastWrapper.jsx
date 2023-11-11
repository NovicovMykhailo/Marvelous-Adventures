import { ToastContainer } from 'react-toastify';
export default function ToastWrapper() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}
