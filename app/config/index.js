const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        host: 'baokhoa.ddns.net',
        port: 3306,
        name: 'hm_dichvu_r2',
        password: '12345',
        user: 'quanly',
      }
};

module.exports = config;
    