import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moduleStore from "../store/moduleStore";
import { LuMonitorPlay } from "react-icons/lu";

export const ModuleItem = () => {
  const { modules, fetchModules, setSelectedVideo } = moduleStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const handleVideoClick = (videoUrl, videoId) => {
    setSelectedVideo(videoUrl);
    navigate(`/Home/video/${videoId}`);
  };

  return (
    <div className="relative  bg-[#F6F7F9] ring-1 ring-gray-900/5">
      <div className="mx-auto">
        <div className="mx-auto grid divide-y divide-neutral-200 cursor-pointer">
          {modules.map((module, index) => (
            //no olvidar el padding
            <div key={index} className="white">
            {/* <div key={index}> */}
              <details className="group">
                <summary className="flex list-none items-center justify-between font-medium pl-5 pr-8">
                  <span className='pt-5 pb-5'>{module.titulo}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div className="mt-6 space-y-2 bg-white">
                  {module.clases.map((clase, claseIndex) => {
                    const videoId = `${index + 1}-${claseIndex + 1}`;
                    return (
                      <div
                        key={claseIndex}
                        className="flex flex-col pl-5 pt-2 pb-2 hover:bg-purple-100 transition duration-200"
                        onClick={() => handleVideoClick(clase.video, videoId)}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-400 text-blue-500 focus:ring-2 focus:ring-blue-400"
                            defaultChecked={clase.completado}
                          />
                          <span className="text-neutral-700 text-sm font-medium">
                            {claseIndex + 1}. {clase.titulo}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 mt-2 pl-8">
                          <LuMonitorPlay />
                          <span className="text-gray-500 text-sm">{clase.duracion}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleItem;