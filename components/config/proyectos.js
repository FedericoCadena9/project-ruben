'use strict';

const { parseMultiData, sanitizeEntity } = require ('strapi-utils');

module.exports = {





    async create(ctx){

        let entity;
        if(ctx.is('multipart'))  {

            const { data, file} = parseMultiData(ctx);

            entity = await strapi.services.proyectos.create(data, {files});
        }else{
            entity = await strapi.services.proyectos.create(ctx.request.body);
        }      
        return sanitizeEntity(entity, {model: strapi.models.Upload});
    },
};