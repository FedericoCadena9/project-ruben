import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";
import { Input } from "../components/Input";

const RegisterPersonal = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm lg:px-3 xl:px-0 place-self-center px-4 sm:px-0 sm:max-w-md">
                <div className="w-full flex justify-center">
                    {/* <div className="relative sm:w-20 sm:h-20 w-16 h-16">
            <Image 
            src="/logo.png"
            alt="ITESHU Logo"
            layout="fill"
            objectFit="cover"
            />
        </div> */}
                </div>
                <div className="mx-auto mt-12 w-64">
                    <div className="bg-gray-200 h-1 flex items-center justify-between">
                        <div className="w-1/2 flex justify-between bg-blue-600 h-1 items-center relative">

                            <div className="bg-primary-500 h-6 w-6 rounded-full shadow-md flex items-center justify-center -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <div className="bg-white h-6 w-6 rounded-full shadow-md flex items-center justify-center -mr-3 relative">
                                <div className="h-3 w-3 bg-primary-500 rounded-full" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-white h-6 w-6 rounded-full shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-14">
                    <h1 className="mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800">
                        Unos pasos más y listo...
                    </h1>
                </div>
                <form className="mt-6">
                    <div className="space-y-4">
                        {/* Nombres */}
                        <Input
                            id="nombres"
                            type="text"
                            label="Nombre(s)"
                            placeholder="Jhon"
                        />

                        {/* Apellidos */}
                        <div className="sm:flex sm:space-x-4">
                            <Input
                                id="apellidPaterno"
                                type="text"
                                label="Apellido Paterno"
                                placeholder="Doe"
                            />
                            <Input
                                id="apellidMaterno"
                                type="text"
                                label="Apellido Materno"
                                placeholder="Smith"
                            />
                        </div>

                        {/* Programa Educativo */}
                        <div className="w-full space-y-2">
                            <label htmlFor="programaEducativo" className="text-sm font-semibold text-gray-600"> Programa Educativo </label>
                            <select id="programaEducativo" name="programaEducativo" className="block w-full h-11 rounded-md text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                                <option defaultValue="">Elegir Programa Educativo</option>
                                <option>Sistemas Computacionales</option>
                            </select>
                        </div>


                        {/* Semestre  */}
                        <div className="w-full space-y-2">
                            <label htmlFor="semestre" className="text-sm font-semibold text-gray-600"> Semestre </label>
                            <select id="semestre" name="semestre" className="block w-full h-11 rounded-md text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                                <option defaultValue="">Elegir Semestre </option>
                                <option>Primero</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-10">
                        <Link href="/registerFinish">
                            <a className="btn-primary">Registrarme</a>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default RegisterPersonal