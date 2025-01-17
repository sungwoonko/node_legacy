const mysql = require('mysql2');
require('dotenv').config();

// MySQL Connection
// MySQL 커넥션을 사용 할 때는, 주로 커넥션 풀을 이용하여 관리하는 것이 권장된다.
const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectionLimit : 10, // 최대 연결 수 설정(필요시)
  insecureAuth: true,
});

//MySQL connection check
connectionPool.getConnection((err,connection) =>{
  if (err){
    console.error('MySQL 연결 중 에러 발생: ',err);
  }else{
    console.log('MySQL에 연결되었습니다.');
    connection.release();
  }
});

module.exports = connectionPool;