import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#F7F4EE] border-b">
      
      <div className="font-bold text-[#26302E]">
        Namly Design
      </div>

      <div className="flex gap-6 text-sm text-[#26302E]">
        <Link to="/">Hem</Link>
        <Link to="/about-us">Om oss</Link>
        <Link to="/contact">Kontakt</Link>
      </div>

    </nav>
  );
}