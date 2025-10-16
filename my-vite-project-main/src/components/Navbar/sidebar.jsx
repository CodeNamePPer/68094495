import { useState } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        {/* Sidebar Toggle Button */}
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
  
        {/* Sidebar */}
        {/* เพิ่ม backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
  
        <div
          className={`fixed top-0 left-0 h-full w-60 bg-[#cee3f8] shadow-lg transform transition-transform z-50 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            
            <h2 className="text-xl font-bold">Menu</h2>
            <br></br>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .10,
                borderColor : '#000000'
            }}/>
            <ul className="mt-4 space-y-2  ">
              <li>
                <a href="#" className="block p-2 hover:bg-blue-300 rounded ">Home</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-300 rounded">About Me</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-300 rounded">Contact</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-300 rounded">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default function Navbar() {
    return (
      <div className="navbar bg-[#d9e8f8] sticky top-0 z-30">
        {/* Sidebar component */}
        <Sidebar />
  
        <div className="flex-1 justify-center">
          <a className="btn btn-ghost text-xl ">My Profile Web</a>
        </div>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Menu</div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-[#d9e8f8] rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li><a>About Me</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }