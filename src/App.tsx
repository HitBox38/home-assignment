import { Route, Routes } from "react-router";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { UserDetails } from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
