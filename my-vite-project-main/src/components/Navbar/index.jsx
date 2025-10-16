import Sidebar from './sidebar'; // นำเข้า Sidebar ที่แยกไฟล์
import ThemeSwitcher from '../ModeSC/mode'; 
export default function Navbar() {
  return (
    <div className="navbar bg-[#d9e8f8] sticky top-0 z-50">
      {/* Sidebar component */}
      <Sidebar />

      
    </div>
  );
}
