const sql = require('mssql');

var webconfig = {
  user: 'batuhan61',
  password: 'batuhan28',
  server: '10.201.188.179',
  database: 'bitirmeProjesi'
};

module.exports.userUyeOl = function(req, res) {
  sql.connect(webconfig, function(err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query(
      "INSERT INTO Uye(Adi,Soyadi,Sifre,Email,KullaniciAdi) VALUES('" +
        req.body.uye_Adi +
        "','" +
        req.body.uye_Soyadi +
        "','" +
        req.body.uye_Sifre +
        "','" +
        req.body.uye_EMail +
        "','" +
        req.body.uye_kullanici_Adi +
        "')",
      function(err, data) {
        if (err) {
          console.log(err);
        }
        sql.close();
        res.render('oturumac');
      }
    );
  });
};

module.exports.UyeOl = function(req, res) {
  res.render('oturumac', { hata: 'kullanıcı adı yok' });
};

module.exports.Giris = function(req, res) {
  res.render('Login', { hata: 'kullanıcı adı yok' });
};
