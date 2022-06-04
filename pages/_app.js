import { useRouter } from 'next/router'
import { parseCookies } from 'nookies';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <>
          <Component {...pageProps} />
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
    useRouter.push(location);
  }
}

MyApp.getInitialProps = async ({ctx}) => {

  // Guarda el jwt
  const jwt = parseCookies(ctx).jwt

  // Condicion que pregunta si existe el jwt, en caso de que no manda al Login a todas las rutas que se presenten en la condición
  if(!jwt) {
    if (ctx.pathname === "/" || ctx.pathname === "/project") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    
  }
}

export default MyApp
