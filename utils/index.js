import { baseUrl, dataApi } from "./dataApi";

export async function getProjects(key) {

    const busqueda = key.queryKey[1].busqueda;
    const categoria = key.queryKey[2].categoria;
    const fecha = key.queryKey[3].fecha;
    const pageNumber = key.queryKey[4].page;
    const pageSize = key.queryKey[5].pageSize;
    const jwt = key.queryKey[6].jwt;

    let base = `${baseUrl}/detalle-proyectos?pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}&populate=*`;

    if(busqueda) {
        base = `${base}&filters[nombre_proyecto][$containsi]=${busqueda}`
    }

    if(categoria) {
        base = `${base}&filters[categorias_proyectos][$eq]=${categoria}`
    }

    if(fecha) {
        base = `${base}&filters[fecha_inscripcion_usuario][$lte]=${fecha}`
    }

    const projects = await dataApi(base, jwt);

    return projects.data;
}
