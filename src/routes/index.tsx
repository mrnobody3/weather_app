import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const WeatherPage = lazy(() => import("../pages/WeatherPage"));

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
