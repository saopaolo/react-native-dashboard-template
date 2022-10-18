import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Dashboard from "./pages/dashboard/Dashboard";
import Customers from "./pages/customer/Customers";
import MainLayout from "./layout/MainLayout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Blank />} />
          <Route path="invoices" element={<Blank />} />
          <Route path="calendar" element={<Blank />} />
          <Route path="chat" element={<Blank />} />
          <Route path="helpcenter" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
