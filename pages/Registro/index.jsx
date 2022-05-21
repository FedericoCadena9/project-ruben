import Image from "next/image";
import {Input} from "../components/input";
import Link from "next/link";

const Registro = () => {
    return (
        <section className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
            <div className="w-full col-span-1 p-4 mx-auto lg:col-span-5 xl:p-12 sm:w-2/4 lg:w-3/4">
                <div className="w-full flex justify-center">
                    <div className="relative sm:w-20 sm:h-20 w-16 h-16">
                        <Image
                            src="https://raw.githubusercontent.com/FedericoCadena9/project-ruben/main/assets/img/Logo.png"
                            alt="Logo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="mt-6 mb-4 text-2xl font-bold text-gray-800">
                        Registarse
                    </h1>
                    <p className="text-sm text-gray-500">
                        {" "}
                        Crear tu cuenta
                    </p>
                </div>
                <form className="mt-6">
                    <div className="space-y-4">
                        <Input
                            id="nombre"
                            type="text"
                            label="Nombre(s)"
                            placeholder="Fernando Uriel"
                        />
                        <Input
                            id="ap_paterno"
                            type="text"
                            label="Apellido Paterno"
                            placeholder="Sánchez"
                        />
                        <Input
                            id="ap_materno"
                            type="text"
                            label="Apellido Materno"
                            placeholder="Ortiz"
                        />
                        <label className="text-sm font-semibold text-gray-800" for="prog_educativo">Programa Educativo</label>
                        <div className="block w-full h-11 rounded-md placeholder:text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                            <div>
                                <select className="block w-full h-11 rounded-md" name="prog_educativo" id="Programa Educativo">
                                    <option value="1"> Sistemas Computacionales </option>
                                    <option value="2"> Mecatronica </option>
                                    <option value="3"> Energias Renovables </option>
                                </select>
                            </div>
                        </div>
                        <label className="text-sm font-semibold text-gray-800" for="prog_educativo">Semestre</label>
                        <div className="block w-full h-11 rounded-md placeholder:text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                            <div>
                                <select className="block w-full h-11 rounded-md" name="prog_educativo" id="Programa Educativo">
                                    <option value="1"> Primero </option>
                                    <option value="2"> Segundo </option>
                                    <option value="3"> Tercero </option>
                                </select>
                            </div>
                        </div>
                        <Input
                            id="telefono"
                            type="text"
                            label="Teléfono"
                            placeholder="555 666 7777"
                        />
                        <Input
                            id="correo"
                            type="email"
                            label="Correo Electrónico"
                            placeholder="a12345678@correo.edu.mx"
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Contraseña"
                            placeholder="Contraseña"
                        />
                        <Input
                            id="password2"
                            type="password"
                            label="Repetir Contraseña"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="flex items-center justify-center my-10" >
                        <input
                            type="submit"
                            className="btn-primary"
                            value="Registrarse"
                        />
                    </div>
                </form>
                <div className="my-6 space-y-2 text-center">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes cuenta?
                        <Link href="/login">
                            <a className="link">Inicia Sesión aquí</a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-7 lg:inline-block hidden">
                <div className="object-cover w-full h-64 min-h-full bg-gray-100 relative">
                    <Image
                        src="https://img.freepik.com/foto-gratis/closeup-mano-femenina-escribiendo-teclado-ordenador-portatil-oficina_3236-734.jpg?w=740"
                        alt="Persona en una laptop"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
             </div>
        </section>
    );
};
export default Registro;