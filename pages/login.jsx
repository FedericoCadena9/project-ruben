// Notification Toast Package
import toast, { Toaster } from "react-hot-toast";

// Hook React
import { useState } from "react";

// Next Packages
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

// Component
import { Input } from "../components/Input";

// Cookies Package
import { setCookie } from "nookies";

const Login = () => {

  // Hooks que guardan el texto que se ingresa al input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hoook para revisar el estado booleano para cambiar el tipo de Input para la contraseña
  const [showPassword, setShowPassword] = useState({ showPassword: false });


  // Función asincrona para realizar el proceso de validación del Login
  async function handleLogin() {

    // JSON que guarda los datos de los Hooks para la petición POST
    const loginInfo = {
      identifier: username,
      password: password,
    };

    // Consumo de la API para el Login
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

    const loginResponse = await login.json();


    // Función que guarda la Cookie y la manda a la ruta main
    setCookie(null, "jwt", loginResponse.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });


    // Manejo de Errores e impresión de los Toast Notification
    if (loginResponse.jwt !== undefined) {
      Router.push("/");
      toast.success("Logeado correctamente");
    }
    else {
      toast.error("Correo electrónico o contraseña incorrectos.");
    }
  }

  // Función de cambio booleano para visualizar la contraseña
  const handleShowPassword = () => {
    setShowPassword({ showPassword: !showPassword.showPassword });
  };

  return (
    <>
      <Head>
        <title>ITESHU | Iniciar Sesión</title>
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

              <div className="w-full space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-600"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword.showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="block w-full h-11 rounded-md placeholder:text-gray-400 border-gray-300 text-sm transition focus-within:text-gray-800 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                  />
                  <div
                    onClick={handleShowPassword}
                    className=" absolute inset-y-0 right-0 flex text-gray-400 active:text-gray-600 items-center justify-center pr-4 text-sm leading-5 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        showPassword.showPassword ? "hidden" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${
                        showPassword.showPassword ? "" : "hidden"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </div>
                </div>
              </div>
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default Login;
