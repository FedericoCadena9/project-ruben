import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "./Input";
import { useState } from "react";
import axios from 'axios';

export default function Upload({isOpen, closeModal}) {

  const [projectInfo, setprojectInfo] = useState({
    nombre: "",
    description: "",
    cantidad_integrantes: "",
    fecha_inicio: "",
    fecha_fin: "",
    fechaPostulacion: "",
    requisitos_integrantes: "",
  });
  const handleInputChange = (event) => {
    setprojectInfo ({
      ...projectInfo,
      [event.target.name]: event.target.value,
    });

  };
  const sendData = (event) => {
    closeModal();
    event.preventDefault();
    console.log(projectInfo);
  };

  
  async function addDepoimento() {
    const depoimentoInfo = {
      title: projectInfo
    };

    const add = await fetch("https://software-ing.herokuapp.com/api/detalleProyectos", {
      method: "POST",
      headers: {
        Accept: "apllication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(depoimentoInfo),
    });

    console.log(depoimentoInfo);
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all h-[40rem] overflow-y-auto">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900"
                  >
                    Subir Nuevo Proyecto
                  </Dialog.Title>

                  <form className="mt-8 space-y-3" action="#" method="POST">
                    <Input
                      onSubmint={sendData}
                      id="nombre"
                      type="text"
                      label="Nombre del Proyecto "
                      placeholder="Añadir nombre"
                      onChange={handleInputChange}
                      name="nombre"
                    />

                    <div className="sm:flex sm:space-x-4">
                      <Input
                        id="fecha_inicio"
                        onSubmint={sendData}
                        type="date"
                        label="Fecha_inicio"
                        placeholder=""
                        onChange={handleInputChange}
                        name="fecha_inicio"
                      />
                      <Input
                        id="fecha_fin"
                        onSubmint={sendData}
                        type="date"
                        label="Fecha Fin"
                        placeholder=""
                        onChange={handleInputChange}
                        name="fecha_fin"
                      />
                    </div>

                    <div className="sm:flex sm:space-x-4">
                      <Input
                        id="cantidad_integrantes"
                        onSubmint={sendData}
                        type="number"
                        label="Integrantes "
                        placeholder="5"
                        onChange={handleInputChange}
                        name="cantidad_integrantes"
                      />
                      <Input
                        id="fechaPostulacion"
                        onSubmint={sendData}
                        type="date"
                        label="Fecha Postulación"
                        placeholder=""
                        onChange={handleInputChange}
                        name="fechaPostulacion"
                      />
                    </div>

                    <div className="w-full space-y-1">
                      <label
                        htmlFor="basic"
                        className="text-sm font-semibold text-gray-600"
                      >
                        Descripción
                      </label>
                      <textarea
                        onSubmint={sendData}
                        rows="4"
                        id="descripcion"
                        placeholder="Describe tu proyecto"
                        onChange={handleInputChange}
                        name="description"
                        className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      ></textarea>
                    </div>

                    <div className="w-full space-y-1">
                      <label
                        htmlFor="basic"
                        className="text-sm font-semibold text-gray-600"
                      >
                        Requisitos
                      </label>
                      <textarea
                      onSubmint={sendData}
                        rows="4"
                        id="requisitos_integrantes"
                        placeholder="Requsitos del proyecto..."
                        onChange={handleInputChange}
                        name="requisitos_integrantes"
                        className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      ></textarea>
                    </div>

                    <div className="py-4">
                      <label
                        className="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                        tabIndex="0"
                      >
                        <span
                          htmlFor="photo-dropbox"
                          className="flex items-center space-x-2"
                        >
                          <svg
                            className="h-6 w-6 stroke-gray-400"
                            viewBox="0 0 256 256"
                          >
                            <path
                              d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></path>
                            <path
                              d="M80,128a80,80,0,1,1,144,48"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></path>
                            <polyline
                              points="118.1 161.9 152 128 185.9 161.9"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></polyline>
                            <line
                              x1="152"
                              y1="208"
                              x2="152"
                              y2="128"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></line>
                          </svg>
                          <span className="text-xs font-medium text-gray-600">
                            Arrastra tu imagen o{" "}
                            <span className="text-blue-600 underline">
                              busca aquí
                            </span>
                          </span>
                        </span>
                        <input id="photo-dropbox" type="file" className="sr-only" />
                      </label>
                    </div>
                  </form>

                  <div className="mt-4 flex space-x-4">
                  <button
                      type="button"
                      className="btn bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-gray-800"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="btn-primary"
                      onClick={(e) => addDepoimento()}
                    >
                      Publicar proyecto
                    </button>

                    
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
