const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'apiteam@swagger.io',
    },
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    User: {
      id: 1,
      name: 'Bima',
      birth_date: '1996-12-12T17:00:00.000Z',
      email: 'bimaagungsetya@gmail.com',
      password: '12345678',
      createdAt: '2022-09-04T14:59:41.336Z',
      updatedAt: '2022-09-04T14:59:41.336Z',
    },
  },
}

const outputFile = './docs/docs.json'
const endpointsFiles = ['./app.js']

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then((r) => {
  console.log(r)
})
