import fetch from 'isomorphic-unfetch'

export async function getServerSideProps(context) {
     const {ID} = context.query
      const res= await fetch (`${"https://software-ing.herokuapp.com/api"}/detalle-proyectos/${ID}`)
      const data = await res.json()
      return {
        props: {
          projects: data[0]
        },
      }
    }
    export default Project
