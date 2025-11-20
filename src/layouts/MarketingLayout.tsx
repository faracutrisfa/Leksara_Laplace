import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export default function MarketingLayout() {
  return (
    <div className="min-h-screen">
      <TopNavbar />
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
