import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { AppRoutes } from "@/app/routes";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
