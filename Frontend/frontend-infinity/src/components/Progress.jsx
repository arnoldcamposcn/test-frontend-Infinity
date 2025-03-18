import { FaStar, FaTrophy } from "react-icons/fa";
import { Logout } from "./Logout";

export const Progress = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-300 text-sm">
      <div className="hidden md:flex space-x-6 ">
        <button className="flex items-center space-x-2 hover:text-white">
          <FaStar className="text-gray-400 text-lg" />
          <span>Deja una calificación</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <FaTrophy className="text-gray-400 text-lg" />
          <span>Tu progreso</span>
        </button>
      </div>

      <Logout />
    </div>
  );
};

export default Progress;
