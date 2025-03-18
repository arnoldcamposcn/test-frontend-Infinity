import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center space-x-2 hover:text-red-500 cursor-pointer"
    >
      <FaSignOutAlt className="text-gray-400 text-lg" />
      <span>Salir</span>
    </button>
  );
};

export default Logout;