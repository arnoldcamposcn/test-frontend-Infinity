import { FaStar, FaTrophy } from "react-icons/fa";

export const Progress = () => {
  return (
    <div className="hidden md:flex items-center space-x-6 text-gray-300 text-sm">
      <button className="flex items-center space-x-2 hover:text-white">
        <FaStar className="text-gray-400" />
        <span>Deja una calificación</span>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <div className="relative flex items-center">
          <FaTrophy className="text-gray-400 text-lg" />
        </div>
        <span>Tu progreso</span>
      </button>
    </div>
  );
};
export default Progress;
