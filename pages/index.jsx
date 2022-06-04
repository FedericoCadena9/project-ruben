import toast, { Toaster } from "react-hot-toast";

import { ProjectCard } from "../components/ProjectCard";

import { useState } from "react";
import Upload from "../components/Upload";


import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import Link from "next/link";

const Home = ({ projects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Imprime en consola los datos de la Api de la tabla Proyectos
  console.log(projects.data);

  // Función para destruir el jwt y salir de la sesión
  function handleClick() {
    destroyCookie(null, "jwt");
    toast.loading("Saliendo, espere un momento...");
  }

  return (
    <section className="min-h-screen bg-primary-100">
      <nav
        className={`fixed top-0 left-0 h-full pb-10 overflow-x-hidden overflow-y-auto  origin-left transform bg-white w-64 z-50 md:translate-x-0 transition-transform duration-150 ease-in ${
          isMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        {/* Close Menu Responsive */}
        <div
          className="mx-4 mt-5 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 text-gray-600 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center py-8">
          <div className="inline-flex">
            <div className="inline-flex flex-row items-center">
              <span className="leading-10 text-gray-700 text-2xl font-bold ml-1 uppercase">
                Iteshu
              </span>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="flex flex-col w-full justify-between px-4 pt-6 h-3/4">
          <div className="">
            <div className="my-px">
              <div
                className="btn-dashboard text-blue-500 bg-blue-50 font-medium"
                onClick={openModal}
              >
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="ml-3">Nuevo Proyecto</span>
              </div>
            </div>
            <div className="my-7 mx-1">
              <hr className="border-gray-200" />
            </div>
            <div className="my-px">
              <div className="btn-dashboard text-white bg-primary-500/90 ">
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
                <span className="ml-3">Inicio</span>
              </div>
            </div>
          </div>
          <div className="my-px">
            <Link href="/">
              <button
                onClick={handleClick}
                className="btn-dashboard text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span className="ml-3">Cerrar sesión</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="ml-0 transition md:ml-64 flex flex-col flex-grow duration-150 ease-in">
        {/* Search Header Projects */}
        <header className=" bg-white p-4 sm:m-8 sm:rounded-xl fixed sm:static z-30 min-w-full sm:min-w-min shadow sm:shadow-none py-4">
          <div className="flex flex-col  md:flex-row">
            <div className="flex justify-between">
              {/* Hamburger Menu Responsive */}
              <div
                className="text-gray-700 md:hidden sm:py-4"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              {/* Filters Button Responsive */}
              <div
                className="text-gray-500 sm:hidden"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>

            <div
              className={`flex-col lg:flex-row lg:justify-between w-full lg:items-center pt-8 sm:pt-0 space-y-4 sm:space-y-0 ${
                isFiltersOpen ? "flex" : "hidden sm:flex"
              }`}
            >
              {/* Search Input */}
              <div className="relative lg:w-auto sm:py-3 lg:py-0 lg:pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-500 pl-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  id="search"
                  type="search"
                  placeholder="Buscar proyectos"
                  className="block w-full rounded-md placeholder:text-gray-300 border-white pl-10 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                />
              </div>

              <div className="sm:flex md:flex-col lg:flex-row items-center sm:space-x-6 md:space-x-0 lg:space-x-6 md:space-y-4 lg:space-y-0">
                {/* Category Select */}
                <div className="relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-400 pl-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <div className="sm:w-48 space-y-0.5 md:w-full lg:w-48">
                    <select
                      id="basic"
                      className="block w-full truncate rounded-md border-white pl-12 pr-8 text-sm transition text-gray-400 "
                    >
                      <option value="">Categoría</option>
                      <option>Biomedicina</option>
                    </select>
                  </div>
                </div>

                {/* Date Select */}
                <div className="relative w-full space-y-4 sm:space-y-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-400 pl-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="sm:w-48 space-y-0.5 md:w-full lg:w-48 ">
                    <select
                      id="basic"
                      className="block w-full truncate rounded-md border-white pl-12 pr-8 text-sm transition text-gray-400 "
                    >
                      <option value="">Fecha</option>
                      <option>Hace 7 dias</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 sm:pt-0 md:w-full">
                  <button className="btn-primary">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="pt-20 sm:pt-0">
          <div className="flex flex-wrap items-center justify-center  gap-4 mx-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <div className="relative z-0 flex justify-center my-8 -space-x-px">
            <button
              type="button"
              className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-l border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Regresar
            </button>
            <button
              type="button"
              className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-r border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 ease-out transition duration-200"></div>
      )}

      {/* Modal Upload */}
      <Upload isOpen={isOpen} closeModal={closeModal} />

      <Toaster position="bottom-center" reverseOrder={false} />
    </section>
  );
};


export const getServerSideProps = async (ctx) => {

  // Variable de la Cookie que guarda el web token para poder visualizar los proyectos
  const jwt = parseCookies(ctx).jwt;

  const baseUrl = `${"https://software-ing.herokuapp.com/api"}`;

  const dataApi = async (url) => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return data;
  };

  // Consumo de la API para ver los datos de los proyectos
  const projects = await dataApi(`${baseUrl}/proyectos`);

  return {
    props: {
      projects: projects,
    },
  };
};

export default Home;
