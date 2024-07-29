import React from 'react';
import { RouterProvider } from "react-router-dom";
import { route } from "./router";

 const App = () => {
  return (
    <RouterProvider router={route}>
    </RouterProvider>
  );
};
export default App;