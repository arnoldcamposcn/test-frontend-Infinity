import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home/video/1" replace />} />
      <Route path="/video/:videoId" element={<Layout />} />
    </Routes>
  );
};

export default Home;