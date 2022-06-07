import  Router  from 'next/router'
import { parseCookies } from 'nookies';
import { QueryClient, QueryClientProvider } from "react-query";

import '../styles/globals.css'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
    </>
  )
}


function redirectUser(ctx, location) {
  if(ctx.req) {
    ctx.res.writeHead(302, {
      Location: location,
      "Content-Type": "text/html; charset=utf-8",
    });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ctx}) => {

  // Guarda el jwt
  const jwt = parseCookies(ctx).jwt

  // Condicion que preguntas si existe el jwt, en caso de que no manda al Login a todas las rutas que se presenten en la condición
  if(!jwt) {
    if (ctx.pathname === "/" || ctx.pathname === "/project") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    
  }
}

export default MyApp
