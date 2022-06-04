import toast, { Toaster } from 'react-hot-toast';


import Link from "next/link";
import Head from "next/head";
import { Input } from "../components/Input";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  


  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(
      "https://software-ing.herokuapp.com/api/auth/local/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      }
    );

    toast('Here is your toast.');

    const loginResponse = await login.json();

    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    if(loginResponse.jwt !== undefined)
    {
      Router.push("/");
    }
    
  }


  return (
    <>
      <Head>
        <title>| Iniciar Sesión</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
        <div className="w-full col-span-1 lg:col-span-4 lg:px-3 xl:px-0 max-w-xs place-self-center px-4 sm:px-0 sm:max-w-md">
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
          <div className="">
            <h1 className="mt-6 mb-4 text-3xl xl:text-4xl font-bold text-gray-800">
              ¡Bienvenido de vuelta!
            </h1>
            <p className="text-sm text-gray-400">
              {" "}
              Inicia sesión y desarrolla tus habilidades profesionales.
            </p>
          </div>
          <form className="mt-6">
            <div className="space-y-4">
              <Input
                id="correo"
                type="email"
                label="Correo Electrónico"
                placeholder="a12345678@correo.edu.mx"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Input
                id="password"
                type="password"
                label="Contraseña"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="mt-2">
              <Link href="/forgot-password">
                <a className="link">Olvidé mi contraseña</a>
              </Link>
            </div>

            <div className="flex items-center justify-center my-10">
              <button
                type="button"
                className="btn-primary"
                onClick={() => handleLogin()}
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
          <div className="my-6 space-y-2">
            <p className="text-sm text-gray-500">
              ¿Aún no tienes cuenta?
              <Link href="/register">
                <a className="link"> Registrate aquí</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8 lg:inline-block hidden">
          <div
            className="object-cover w-full h-64 min-h-full bg-gray-100 relative bg-cover"
            style={{
              backgroundImage: `url(/loginBackground.svg)`,
            }}
          ></div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
