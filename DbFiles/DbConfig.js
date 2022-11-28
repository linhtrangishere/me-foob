var config = {
    user: `${process.env.USERNAME}`,
    password: `${process.env.PASSWORD}`,
    database: 'QuanLyDatVaGiaoHang',
    server: `${process.env.SERVER_NAME}`,
    driver: 'mssql',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
    },
};

module.exports = config;
