import Button from "../Button";
import { Link } from "react-router-dom";

// icons
import { Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-screen-full mx-auto w-full flex items-center justify-between bg-violet-800 text-white px-8 py-4">
      <div>
        <span className="logo text-2xl">Viekosoft</span>
      </div>
      <nav className="text-white space-x-12 font-medium hidden md:block">
        <Link to={"/"}>Home</Link>
        <Link to={"/layanan"}>Layanan</Link>
        <Link to={"/tentang"}>Tentang Kami</Link>
        <Link to={"/faq"}>FaQ</Link>
        <Link to={"/testimoni"}>Testimoni</Link>
      </nav>
      <div className="flex items-center space-x-8">
        {/* icons sosmed */}
        <ul className="hidden md:block">
          <li className="flex item-center gap-3">
            <a
              href=""
              target=""
              className="text-gray-600 p-2 rounded-full bg-white hover:bg-violet-200 shadow-xl duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href=""
              target=""
              className="text-gray-600 p-2 rounded-full bg-white hover:bg-violet-200 shadow-xl duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href=""
              target=""
              className="text-gray-600 p-2 rounded-full bg-white hover:bg-violet-200 shadow-xl duration-300"
            >
              <Instagram size={18} />
            </a>
          </li>
        </ul>
        <Button className="bg-white text-gray-600 hidden md:block">Kontak</Button>
      </div>
    </div>
  );
};

export default Header;
