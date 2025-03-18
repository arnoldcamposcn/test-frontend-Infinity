export const InformationDetails = () => {
  return (
    <div className="bg-white pt-4 pl-5 ">
      <h2 className="text-lg font-semibold text-gray-800">
        Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones,
        Despliegues, CRUD, Logs, MUI, Multiple Routers...
      </h2>

      <div className="flex flex-wrap items-center space-x-6 mt-3 text-gray-600 pt-1 md:p-0">

        <div className="flex items-center space-x-1">
          <span className="text-lg font-bold text-yellow-500">4.8</span>
          <span>⭐</span>
          <span className="text-sm">(23,772 calificaciones)</span>
        </div>

        <div className="text-sm font-medium">
          <strong className="text-gray-800">82,696</strong> Estudiantes
        </div>

        <div className="text-sm font-medium">
          <strong className="text-gray-800">55 horas</strong> Total
        </div>
      </div>

      <div className="flex items-center mt-2 text-sm text-gray-500 pb-5">
        <span>🌍 Español | Latino</span>
      </div>
      <div className="flex items-center mt-2 text-sm text-gray-500 pb-5">
        <a href="https://www.linkedin.com/in/klever-arnold-campos-crespin-1652a4286/" target="_blank" rel="noopener noreferrer">
          Desarrollado por Klever Arnold Campos Crespin
        </a>
        <a href="https://drive.google.com/file/d/1Db9tz0DKaP-rXknMSn3SdHEPY9bHO955/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          | Imagen deployment
        </a>
      </div>
    </div>
  );
};

export default InformationDetails;
