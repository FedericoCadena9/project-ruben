//import toast, {Toaster} from "react-hot-toast";
import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from 'axios';



const Register = () => {    
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [usuarioTelefono, setUsuarioTelefono] = useState("");
  const [usuarioContrasenia, setUsuarioContrasenia] = useState("");

  async function addUser(){
    /*const usuariosInfo ={
    correo: usuarioCorreo,
    telefono: usuarioTelefono,
    };*/
    const { data } = await axios.post(
      'https://software-ing.herokuapp.com/api/usuarios',
      {
        data: {
          correo: setUsuarioCorreo,
          telefono: setUsuarioTelefono,
        }
      },
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            'Bearer 410d6ce4c4c1d5f914387fdea72ba9f99be3ebcb0386cb85fe0c90cb5fd383a548a32a40b977cab34b05616a6ab1f566cfe67e7901e8d43916f8a388a376e7ed6b44b30d5185d154d1e2012077befcf844bc7d57ccaf74daa80f45fe2fbcfcec5049a9647e8e34e26da3b34f8d9d697c14df028614abbd60fd3408ec209312e9',
        },
        body: JSON.stringify(data),
      }
      
    );
    //const add = await add.json();
    console.log(data);
    };
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
              <div className=" flex justify-end">
                <div className="bg-white h-6 w-6 rounded-full shadow-md" />
              </div>
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
              onChange={(e)=>setUsuarioCorreo(e.target.value)}
              value={usuarioCorreo}
              label="Correo Electrónico"
              placeholder="a12345678@correo.edu.mx"
            />

            {/* Teléfono */}
            <Input
              id="telefono"
              type="text"
              onChange={(e)=>setUsuarioTelefono(e.target.value)}
              value={usuarioTelefono}
              label="Teléfono (Opcional)"
              placeholder="555 666 7777"
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
          </div>

          <div className="flex items-center justify-center my-10">
            <Link href="/registerPersonal">
              <a className="btn-primary" onClick={()=>addUser()}>Siguiente</a>
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
  )
}
export default Register;
