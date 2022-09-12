import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, FormView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/form" element={<FormView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
