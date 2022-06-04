import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from 'next/router'
// import { parseCookies } from 'nookies';

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
    ctx.res.writeHead(302, { Location: location});
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ctx}) => {

  const jwt = false

  if(!jwt) {
    if (ctx.pathname === "/") {
      redirectUser(ctx, "login");
      
    }
  }

  return {
    
  }
}

export default MyApp
