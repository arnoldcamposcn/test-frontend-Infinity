import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ModuleItem from './components/ModuleItem';
import VideoPlayer from './components/VideoPlayer';

export const App = () => {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/video/:videoId" element={<ModuleItem />} />
        </Routes>
        <VideoPlayer />
      </div>
    </Layout>
  );
};

export default App;
