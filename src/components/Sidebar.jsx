import { useAuth } from "context/authContext";
import PrivateComponent from "./PrivateComponent";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarLinks = () => {
  return (
    <ul className="mt-12">
      <SidebarRoute to="" title="Inicio" icon="fas fa-home" />
      <PrivateComponent roleList={["ADMINISTRADOR"]}>
        <SidebarRoute to="/usuarios" title="Usuarios" icon="fas fa-user" />
      </PrivateComponent>
      <SidebarRoute to="/proyectos" title="Proyectos" icon="fas fa-archway" />
      <SidebarRoute to="/avance" title="Avances" icon="fab fa-adversal" />
      <SidebarRoute to="/inscripcion" title="Inscripciones" icon="fas fa-audio-description" />
      <LogOut />
    </ul>
  );
};

const LogOut = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log("eliminar token");
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      <NavLink to="/auth/login" className="sidebar-route text-red-700">
        <div className="felx items-center">
          <i className="fas fa-sign-out-alt" />
          <span className="text-sm ml-2">Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};

const Logo = () => {
  return (
    <div className="py-3 w-full flex flex-col items-center justify-center">
      <img src="logo.ico" alt="Logo" className="h-16 rounded-t-xl" />
      <span className="my-2 text-xl font-bold text-center">
        Gestion de Proyectos TECH5
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col md:flex-row flex-no-wrap md:h-full">
      {/* Sidebar starts */}

      <div className="sidebar hidden md:flex">
        <div className="px-8">
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className="flex md:hidden w-full justify-between bg-gray-800 p-2 text-white">
        <i
          className={`fas fa-${open ? "times" : "bars"}`}
          onClick={() => setOpen(!open)}
        />
        <i className="fas fa-home" />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className="sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div className="px-8">
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "sidebar-route text-white bg-indigo-700"
            : "sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400"
        }
      >
        <div className="flex items-center">
          <i className={icon} />
          <span className="text-sm  ml-2">{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
