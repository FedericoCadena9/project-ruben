import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";
import { Input } from "../components/Input";

const RegisterFinish = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm lg:px-3 xl:px-0  px-4 sm:px-0 sm:max-w-md">
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
                    <div className="bg-blue-600 h-1 flex items-center justify-between">
                        <div className="w-1/2 flex justify-between bg-blue-600 h-1 items-center relative">

                            <div className="bg-primary-500 h-6 w-6 rounded-full shadow-md flex items-center justify-center -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                            <div className="bg-primary-500 h-6 w-6 rounded-full shadow-md flex items-center justify-center -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-primary-500 h-6 w-6 rounded-full shadow-md flex items-center justify-center -ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mt-14">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center ">
                        <h1 className="mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800">
                            ¡Felicidades!
                        </h1>
                        <p className="text-sm text-gray-400">
                            {" "}
                            Has completado tu registro, inicia sesión para poder continuar.
                        </p>
                    </div>
                    <div className="flex items-center justify-center my-10 w-full">
                        <Link href="/login">
                            <a className="btn-primary"> Iniciar Sesión</a>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RegisterFinish