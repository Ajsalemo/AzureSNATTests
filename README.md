<<<<<<< HEAD
# AzureSNATTests
=======
# ExpressAPI

<br>
An Express.js CRUD API that calls to a Postgres database using Sequelize. Pm2 is used for production process management and Agentkeepalive for connection reuse on calls using Axios.

Project makeup:
- `express` is used as the server fielding HTTP requests
- `axios` is used for API calls to other API based endpoints
- `postgres` is used for the 'main' part of this repository which is a CRUD based application
- `sequelize` is used as the ORM paired with Azure Database for PostgreSQL
- `agentkeepalive` is used for connection reuse and keepalives that is passed into `axios`

This project uses two approaches for making requests
- the `controllers/axios` folder which contains API calls using Axios to test out `agentkeepalive` and connection reuse/keepalives
- the `controllers/postgres` folder which contains calls to Postgres with the help of Sequelize to also test out the use of connection pooling.

Ideally, this project is a combination of techniques created primarily for testing while using Express as a backbone. This can either be ran containerized or with Pm2 separately.
>>>>>>> 5eda6e7bebaaf42684aaa14a4df30225fd8a1a6e
