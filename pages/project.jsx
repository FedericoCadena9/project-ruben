import Image from "next/image";
import { useRouter } from "next/router";
import axios from 'axios';

const Project = ({ articles }) => {
  console.log(articles.data);

  const router = useRouter();

  return (
    <>
      <article
        className="px-4 py-6 mx-auto max-w-7xl"
      >
        <div className="w-full mx-auto mb-8 text-left md:w-3/4 lg:w-1/2">
          <button onClick={() => router.back()} className="my-4 text-gray-500 w-12 h-12 hover:bg-slate-100 active:bg-slate-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="object-cover w-full h-64 bg-center  bg-gray-100 relative">
            <Image
              src="https://images.unsplash.com/photo-1654010889654-cbc6a6978367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary-500">
            Categoría
          </p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Nombre del Proyecto
          </h1>
          <div className="bg-green">
            {articles.data.map(propiedad => {
              return (
                <div key={propiedad.id}>
                  <h3>{propiedad.nombre}</h3>
                </div>
              )
            })}
          </div>
          <div className="flex items-center text-gray-700">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Nombre del Postulador
              </p>
              <p className="text-sm text-gray-500">02 Mayo 2022</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Descripción */}
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2 text-gray-700">
            <h2 className="text-xl text-gray-800 font-semibold mb-3">
              Descripción
            </h2>
            <p>
              AAAAA
            </p>
            <p>
              Tailwind is a utility-first CSS framework, the keyword being
              ‘utility’. It is basically a set of classes that you can use in
              your HTML.
            </p>
            <p>
              Therefore, we don’t have to write any custom CSS to get this
              button. This can be heavily extended to build whole web
              applications without the need for any other styles apart from a
              tailwind.
            </p>
          </div>

          {/* Requisitos */}
          <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2 text-gray-700">
            <h2 className="text-xl text-gray-800 font-semibold mb-3">
              Requisitos
            </h2>
            <p>
              What if there is an easy way to achieve responsive UI without
              using any UI kit? Can we create new and fresh designs for every
              project with a CSS framework? Enter Tailwind CSS, will this be the
              perfect CSS framework, well let’s find out.
            </p>
            <p>
              Tailwind is a utility-first CSS framework, the keyword being
              ‘utility’. It is basically a set of classes that you can use in
              your HTML.
            </p>
            <p>
              Therefore, we don’t have to write any custom CSS to get this
              button. This can be heavily extended to build whole web
              applications without the need for any other styles apart from a
              tailwind.
            </p>
          </div>
        </div>
      </article>
          </>
  );
};

export const getServerSideProps = async (context) => {
  const baseURL = `${"https://software-ing.herokuapp.com/api"}`;

  const consumirApi = async (url) => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer 2b684a90c99542f9a613cf591b8ea623ba4ca3fac0f3a363c4d966f97759650071f13d5449f71e41ce7a9550d1dbf9e654b23e616bd703e5e864a73a1cdcc06a4d059c2bfae12f22b3b4840da90a8a46c4cb4d4eee9d1b081aa8c60c630189062cfc23d1bb03e4a2e685e4d89d2800d4ec21445993b2942020ed66ee4940cf11`,
      },
    });

    return data;
  };

  const articles = await consumirApi(`${baseURL}/proyectos?populate=*`);

  return {
    props: {
      articles: articles,
    },
  };
}

/*export async function getServerSideProps(context) {
  const {id} = await context.query
  const res = await fetch(`${"https://software-ing.herokuapp.com/api"}/proyectos/${id}`);
  const data = await res.json();

  return {
    props: {data}, 
  }
}*/

export default Project;
