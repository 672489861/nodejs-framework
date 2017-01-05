/**
 * Created by Arnold on 2016/12/30.
 */
module.exports = {
  port: 8080,
  session: {
    secret: 'framework',
    key: 'framework',
    maxAge: 864000000
  },
  mongodb: 'mongodb://localhost:27017/framework',
  mysql: {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'testnode',
    port: 3306,
    connectionLimit: 10
  }
};