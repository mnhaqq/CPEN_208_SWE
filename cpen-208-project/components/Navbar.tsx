// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">Course Management System</div>
        <div>
          <Link legacyBehavior href="/login">
            <a className="text-white hover:text-gray-200 mx-4 transition-colors">Login</a>
          </Link>
          <Link legacyBehavior href="/register">
            <a className="text-white hover:text-gray-200 mx-4 transition-colors">Register</a>
          </Link>
          <Link legacyBehavior href="/dashboard">
            <a className="text-white hover:text-gray-200 mx-4 transition-colors">Dashboard</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
