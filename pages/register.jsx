import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";

const Register = () => {
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [usuarioTelefono, setUsuarioTelefono] = useState("");
  const [usuarioContrasenia, setUsuarioContrasenia] = useState("");
  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioApellidoPaterno, setUsuarioApellidoPaterno] = useState("");
  const [usuarioApellidoMaterno, setUsuarioApellidoMaterno] = useState("");
  const [usuarioCarrera, setUsuarioCarrera] = useState("");
  const [usuarioSemestre, setUsuarioSemestre] = useState("");

  const addUser = async (event) => {
    /*const usuariosInfo ={
    correo: usuarioCorreo,
    telefono: usuarioTelefono,
    };*/
    axios
      .post("https://software-ing.herokuapp.com/api/auth/local/register", {
        // Remplazar los "textos" con las constantes de arriba
        username: "Prueba",
        email: "test2@test.com",
        password: "Password",
        
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });

      const jwt = parseCookies(event).jwt;
  }
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full lg:px-3 xl:px-0 place-self-center px-4 sm:px-0 sm:max-w-md">
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
              <div className="bg-white h-6 w-6 rounded-full shadow-md flex items-center justify-center -mr-3 relative">
                <div className="h-3 w-3 bg-primary-500 rounded-full" />
              </div>
              {/* <div className="bg-indigo-700 h-6 w-6 rounded-full shadow-md flex items-center justify-center -ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div> */}
              
            </div>
            <div className="flex justify-end">
              <div className="bg-white h-6 w-6 rounded-full shadow-md" />
            </div>
          </div>
        </div>
        <div className="text-center mt-14">
          <h1 className="mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800">
            Registrarse
          </h1>
        </div>
        <form className="mt-6">
          <div className="space-y-4">
            {/* Correo */}
            <Input
              id="correo"
              type="email"
              label="Correo Electrónico"
              placeholder="a12345678@correo.edu.mx"
              onChange={(e) => setUsuarioCorreo(e.target.value)}
              value={usuarioCorreo}
            />

            {/* Teléfono */}
            <Input
              id="telefono"
              type="text"
              label="Teléfono (Opcional)"
              placeholder="555 666 7777"
              onChange={(e)=>setUsuarioTelefono(e.target.value)}
              value={usuarioTelefono}
            />

            {/* Contraseña */}
            <Input
              id="password"
              type="password"
              onChange={(e)=>setUsuarioContrasenia(e.target.value)}
              value={usuarioContrasenia}
              label="Contraseña"
              placeholder="Al menos 8 caracteres"
            />

            {/* Repetir Contraseña */}
            <Input
              id="passwordConfirm"
              type="password"
              label="Repetir Contraseña"
              placeholder="Al menos 8 caracteres"
            />

            {/* Nombres */}
            <Input
              id="nombres"
              type="text"
              onChange={e => setUsuarioNombre(e.target.value)}
              value={usuarioNombre}
              label="Nombre(s)"
              placeholder="Jhon"
            />

            {/* Apellidos */}
            <div className="sm:flex sm:space-x-4">
              <Input
                id="apellidoPaterno"
                type="text"
                onChange={e => setUsuarioApellidoPaterno(e.target.value)}
                value={usuarioApellidoPaterno}
                label="Apellido Paterno"
                placeholder="Doe"
              />
              <Input
                id="apellidoMaterno"
                type="text"
                onChange={e => setUsuarioApellidoMaterno(e.target.value)}
                value={usuarioApellidoMaterno}
                label="Apellido Materno"
                placeholder="Smith"
              />
            </div>

            {/* Programa Educativo */}
            <div className="w-full space-y-2">
                <label htmlFor="programaEducativo" className="text-sm font-semibold text-gray-600"> Programa Educativo </label>
                <select id="programaEducativo"  className="block w-full h-11 rounded-md text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" onChange={e => setUsuarioCarrera(e.target.value)} value={usuarioCarrera}>
                    <option defaultValue="">Elegir Programa Educativo</option>
                    <option>Sistemas Computacionales</option>
                    <option>Energias Renovables</option>
                    <option>Ingeniería Industrial</option>
                    <option>Arquitectura</option>
                    <option>Gestión Empresarial</option>
                    <option>Ingeniería en Administración</option>
                </select>
            </div>


            {/* Semestre  */}
            <div className="w-full space-y-2">
                <label htmlFor="semestre" className="text-sm font-semibold text-gray-600"> Semestre </label>
                <select id="semestre" name="semestre" className="block w-full h-11 rounded-md text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" onChange={e => setUsuarioSemestre(e.target.value)} value={usuarioSemestre}>
                    <option defaultValue="">Elegir Semestre </option>
                    <option>Primero</option>
                    <option>Segundo</option>
                    <option>Tercero</option>
                    <option>Cuarto</option>
                    <option>Quinto</option>
                    <option>Sexto</option>
                    <option>Séptimo</option>
                    <option>Octavo</option>
                    <option>Noveno</option>
                    <option>Decimo</option>
                    <option>Onceavo</option>
                </select>
            </div>
          </div>

          <div className="flex items-center justify-center my-10">
            <Link href="/registerFinish">
              <a className="btn-primary" onClick={() => addUser()}>
                Registrarse
              </a>
            </Link>
          </div>
        </form>
        <div className="my-6 space-y-2 text-center">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?
            <Link href="/login">
              <a className="link"> Inicia Sesión</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Register;
