import { FaChevronLeft } from "react-icons/fa";

export const TitleCourse = () => {
  return (
    <div className="flex items-center space-x-2 text-gray-300 text-sm">
      <FaChevronLeft className="text-gray-400" />
      <span className="cursor-pointer hover:underline">Inicio</span>
      <span className="text-gray-500">|</span>
      <span className="font-semibold text-white">
        React: De cero a experto (Hooks y MERN)
      </span>
    </div>
  );
};

export default TitleCourse;
