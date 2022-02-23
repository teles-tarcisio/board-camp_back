import pg from 'pg';

const roleSettings = {
  user: 'bootcamp_role',
  password: 'senha_super_hiper_ultra_secreta_do_role_do_bootcamp',
  host: 'localhost',
  port: 5432,
  database: 'boardcamp'
};

const { Pool } = pg;
const dbConnection = new Pool(roleSettings);

export default dbConnection;