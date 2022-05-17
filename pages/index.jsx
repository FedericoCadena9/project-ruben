import Image from "next/image";
import Link from "next/link";
import { Input } from "../components/Input";

const Login = () => {
  return (
    <section className="grid grid-cols-1 gap-0 lg:grid-cols-12 h-screen">
      <div className="w-full col-span-1 p-4 mx-auto lg:col-span-5 xl:p-12 sm:w-2/4 lg:w-3/4 place-self-center	">
        <div>Logo</div>
        <div className="text-center">
          <h1 className="mt-6 mb-4 text-2xl font-bold text-gray-800">
            Iniciar Sesión
          </h1>
          <p className="text-sm text-gray-500">
            {" "}
            Encuentra donde desarrollar tus habilidades profesionales.
          </p>
        </div>
        <form className="mt-6">
          <div className="space-y-4">
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
          </div>

          <div className="mt-2">
            <Link href="/forgot-password">
              <a className="link">Olvidé mi contraseña</a>
            </Link>
          </div>

          <div className="flex items-center justify-center my-10">
            <input
              type="submit"
              className="btn-primary"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <div className="my-6 space-y-2 text-center">
          <p className="text-sm text-gray-600">
            ¿Aún no tienes cuenta?
            <Link href="/register">
              <a className="link"> Registrate aquí</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-7 lg:inline-block hidden">
        <div className="object-cover w-full h-64 min-h-full bg-gray-100 relative">
          <Image
            src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            alt="ITESHU estudiantes con una laptop"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
