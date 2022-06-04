import { Router } from 'next/router'
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
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ctx}) => {

  const jwt = parseCookies(ctx).jwt

  if(!jwt) {
    if (ctx.pathname === "/" || ctx.pathname === "/project") {
      redirectUser(ctx, "login");
    }
  }

  return {
    
  }
}

export default MyApp
