import Image from "next/image";
import Link from "next/link";

export const ProjectCard = () => {
  return (
    <>
      <Link href="/project">
        <div className="bg-white rounded-lg p-6 w-[17.5rem] cursor-pointer">
          <div className="mt-2">
            <div className="object-cover w-12 h-12  bg-gray-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1653917167943-c1ec97050d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-lg   "
              />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700 text-lg font-semibold">
              Titulo del proyecto
            </p>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus dolorem consequatur, ad, suscipit laudantium voluptates
              esse laboriosam commodi temporibus quam sed ex omnis maiores nisi.
            </p>
            <div className="flex gap-6 pt-3">
              <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <p>Biomedicina</p>
              </div>
              <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Presencial </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
