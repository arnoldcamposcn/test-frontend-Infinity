import React from "react";
import ModuleItem from "./ModuleItem";
import { TitleCourse } from "./TitleCourse";
import { VideoPlayer } from "./VideoPlayer";
import { Progress } from "./Progress";
import InformationDetails from "./InformationDetails";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col">

        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div className="text-lg"><TitleCourse />
          </div>
          <div className="p-2"><Progress /></div>
        </header>

        <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
          <div>
            <VideoPlayer />
            <div className="mt-4">
              <InformationDetails />
            </div>
          </div>

          <aside className="w-full md:w-1/3 bg-gray-100 md:block overflow-visible">
            <h2 className="font-bold text-lg p-5">Contenido del curso</h2>
            <ul>
              <ModuleItem />
            </ul>
          </aside>

        </main>
      </div>
    </>
  );
};

export default Layout;

