import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Layanan", path: "/layanan" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "FaQ", path: "/faq" },
  { name: "Testimoni", path: "/testimoni" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="max-w-screen-full mx-auto w-full flex items-center justify-between bg-primary text-gray-700 px-8 py-4">
      {/* Logo */}
      <div>
        <span className="logo text-2xl">Viekosoft</span>
      </div>

      {/* Navigation */}
      <nav className="text-gray-700 px-6 py-2 space-x-12 font-medium hidden md:flex bg-white rounded-full shadow-xl relative items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative group transition-colors duration-300 ${
              location.pathname === item.path ? "text-secondary" : ""
            }`}
          >
            {item.name}
            {/* underline animasi */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </nav>
      {/* Icons Sosmed */}
      <div className="flex items-center space-x-4">
        <ul className="hidden md:flex">
          <li className="flex items-center gap-3">
            <a
              href="#"
              className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
            >
              <Facebook size={18} />
            </a>
          </li>
        </ul>
        <Button className="bg-white hover:bg-secondary hover:text-white duration-300 text-gray-700 hidden md:block">
          Kontak
        </Button>
      </div>
    </div>
  );
};

export default Header;
