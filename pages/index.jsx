import { ProjectCard } from "../components/ProjectCard";


const Home = () => {
    return (
        <div className="flex flex-row min-h-screen bg-primary-100 text-gray-800 items-stretch">
            <aside
                className="w-64 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white"
            >
                {/* Logo */}
                <div className="sidebar-header flex items-center justify-center py-8">
                    <div className="inline-flex">
                        <div className="inline-flex flex-row items-center">
                            <span className="leading-10 text-gray-700 text-2xl font-bold ml-1 uppercase">Iteshu</span>
                        </div>
                    </div>
                </div>


                {/* Sidebar Desktop */}
                <div className="flex flex-col w-full justify-between px-4 pt-6 h-5/6">
                    <div className="">
                        <div className="my-px">
                            <div className="btn-dashboard text-blue-500 bg-blue-50 font-medium">
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="ml-3">Nuevo Proyecto</span>
                            </div>
                        </div>
                        <div className="my-7 mx-1">
                            <hr className='border-gray-200' />
                        </div>
                        <div className="my-px">
                            <div
                                className="btn-dashboard text-white bg-primary-500/90 "
                            >
                                <span className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </span>
                                <span className="ml-3">Inicio</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-px">
                        <div className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700">
                            <span className="flex items-center justify-center text-lg text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <span className="ml-3">Cerrar sesión</span>
                        </div>
                    </div>
                </div>
            </aside>

            <main className=" flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">

                {/* Search Header Projects */}
                <header className=" bg-white p-4 m-8 rounded-xl">
                    <div className=" flex items-center flex-row">
                        <form action="#" className='flex justify-between w-full items-center'>

                            {/* Search Input */}
                            <div className="relative w-56">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-500 pl-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input id="search" type="search" placeholder="Buscar proyectos" className="block w-full rounded-md placeholder:text-gray-300 border-white pl-10 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>

                            <div className='flex items-center space-x-6'>
                                {/* Category Select */}
                                <div className="relative w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-400 pl-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                    <div className="w-48 space-y-0.5">
                                        <select id="basic" className="block w-full truncate rounded-md border-white pl-12 pr-8 text-sm transition text-gray-400 ">
                                            <option selected="">Categoría</option>
                                            <option>Biomedicina</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Date Select */}
                                <div className="relative w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-8 pointer-events-none absolute inset-y-0 left-0 text-gray-400 pl-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div className="w-48 space-y-0.5">
                                        <select id="basic" className="block w-full truncate rounded-md border-white pl-12 pr-8 text-sm transition text-gray-400 ">
                                            <option selected="">Fecha</option>
                                            <option>Hace 7 dias</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="">
                                    <button className="btn-primary">
                                        Buscar
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </header>
                <div className="">
                    <div className="grid grid-cols-4 gap-4 mx-8">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <div class="relative z-0 flex justify-center my-8 -space-x-px">
                        <button
                            type="button"
                            class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-l border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Regresar
                        </button>
                        <button
                            type="button"
                            class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded-r border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Siguiente
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home