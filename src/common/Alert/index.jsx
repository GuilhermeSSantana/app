import { toast } from "react-toastify";

export default function Alert({ type, message, time }) {
  const config = {
    position: "top-right",
    autoClose: time || 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  switch (type) {
    case "success":
      toast.success(message, config);
      break;
    case "error":
      toast.error(message, config);
      break;
    case "warning":
      toast.warning(message, config);
      break;
    case "info":
      toast.info(message, config);
      break;
    default:
      toast.info(message, config);
      break;
  }
}
