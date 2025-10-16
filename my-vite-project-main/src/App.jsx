import Navbar from './components/Navbar'; // Import Navbar
import ThemeSwitcher from './components/ModeSC/mode'; 

export default function App() {
  return (
    <div className="min-h-screen">
      
      <div className="navbar bg-[#aed5ff]">
      <div className="flex-1 justify-center">
              <a className="btn btn-ghost text-xl">Test</a>
          </div>
      <ThemeSwitcher />
        </div>
      <Navbar /> {/* Navbar */}
      <div className="bg-base-100 min-h-screen p-4">
        {/* คอมโพเนนต์สลับธีม */}
       

        {/* คอนเทนต์อื่นๆ */}
        <div className="hero bg-base-100 min-h-screen" >
          
  <div className="hero-content flex-col lg:flex-row-reverse">
        <img
        src="Picture/blank-profile-picture-973460_1280.png"
        className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Welcome To My Profile  !</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Delectus iste accusamus quo illum neque sapiente itaque,
         maxime tempora, doloribus soluta alias aspernatur eius debitis 
         vel excepturi distinctio consectetur? Illum ratione totam 
         labore obcaecati incidunt magnam provident nobis quis, 
         recusandae hic similique quod nulla blanditiis. Dolore 
         repellat quos laboriosam commodi officiis veritatis beatae, 
         voluptas eligendi obcaecati, est dolorem sit inventore velit magnam, optio deleniti voluptatibus.
        
      </p>
      
    </div>
  </div>
</div>
      </div>

    </div>
  );
}