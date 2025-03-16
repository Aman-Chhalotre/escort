import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const currentRoute = location.pathname.replace("/", "").replace("-", " ");


  if (location.pathname === "/") return null;

  return (
    <div className="flex items-center space-x-2 text-sm font-bold text-white p-2">
      <Link to={"/"} className="text-red-500">Escort Palma</Link>
      <span className="text-red-500">{">"}</span>
      <span className="text-gray-300 capitalize">{currentRoute}</span>
    </div>
  );
};

export default Breadcrumb;
