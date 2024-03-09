const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="sm: container mx-auto flex items-center justify-around space-x-10 py-4 text-white lg:justify-start">
        <a href="#">
          <img
            className="h-8"
            src="https://via.placeholder.com/150"
            alt="Sample logo"
          />
        </a>
        <ul className="flex space-x-3 text-gray-300">
          <li>
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Tasks</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
