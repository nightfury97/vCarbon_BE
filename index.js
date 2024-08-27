const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Welcome to my web server");
});
app.get('/treeType', (req, res) => {
  let treeType = [];
  treeType.push({ name: 'Keo lai', type: 'Acacia_hybrid' });
  treeType.push({ name: 'Keo lá tràm', type: 'Acacia_auriculiformis' });
  treeType.push({ name: 'Sao Đen', type: 'Hopea_odorata' });
  treeType.push({ name: 'Thông ba lá', type: 'Pinus_kesiya' });
  treeType.push({ name: 'Thông nhựa', type: 'Pinus_merkusii' });
  treeType.push({ name: 'Tràm cừ', type: 'Melaleuca_cajuputi' });
  treeType.push({ name: 'Dừa', type: 'Cocos_nucifera' });
  treeType.push({ name: 'Vầu đắng', type: 'Indosasa_augustata' });
  treeType.push({ name: 'Lồ ô', type: 'Bambusa_balcooa' });
  treeType.push({ name: 'Trúc sào', type: 'Phyllostachys_pubescens' });
  treeType.push({ name: 'Đước đôi', type: 'Rhizopphora_apiculata_Blume' });
  treeType.push({ name: 'Tre moso', type: 'Phyllostachys_pubescens2' });
  treeType.push({ name: 'Bạch đàn camal', type: 'Orther' });
  treeType.push({ name: 'Bạch đàn lai', type: 'Orther' });
  treeType.push({ name: 'Bạch đàn urô', type: 'Orther' });
  treeType.push({ name: 'Keo tai tượng', type: 'Orther' });
  treeType.push({ name: 'Thông mã vĩ', type: 'Orther' });
  treeType.push({ name: 'Thông caribê', type: 'Orther' });
  treeType.push({ name: 'Cao su', type: 'Orther' });
  treeType.push({ name: 'Lim xanh', type: 'Orther' });
  treeType.push({ name: 'Giổi xanh', type: 'Orther' });
  treeType.push({ name: 'Bời lời đỏ', type: 'Orther' });
  treeType.push({ name: 'Trôm', type: 'Orther' });
  treeType.push({ name: 'Quế', type: 'Orther' });
  treeType.push({ name: 'Hồi', type: 'Orther' });
  treeType.push({ name: 'Mắc ca', type: 'Orther' });
  treeType.push({ name: 'Sơn tra', type: 'Orther' });
  treeType.push({ name: 'Trám trắng', type: 'Orther' });
  treeType.push({ name: 'Trám đen', type: 'Orther' });
  treeType.push({ name: 'Tràm lá dài', type: 'Orther' });
//   treeType.push({ name: 'Tràm cừ', type: 'Orther' });
  treeType.push({ name: 'Bần chua', type: 'Orther' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.send(treeType);

});
function formatCurrency(number, locale = 'vi-VN') {
    return new Intl.NumberFormat(locale).format(number);
  }
  
app.post('/calCacbon', (req, res) => {
//   console.log("req",req);
  var Type = req.query.type;
  var TreeCount = Number((req.query.treecount / 10));
  var Area = Number(req.query.area);
  var DBH = Number(req.query.dbh);
  var wbd = Number(req.query.wbd);
  var SK=0;
  console.log("Type",Type);
  console.log("TreeCount",TreeCount);
  console.log("Area",Area);
  console.log("DBH",DBH);
  console.log("wdb",wbd);
  switch (Type) {
    case "Acacia_hybrid":
        console.log("(-5.425 + 622.913*DBH*0.5)*Area*TreeCount");
        SK = (-5.425 + 622.913*DBH*0.5)*Area*TreeCount;                
        break;
    case "Acacia_auriculiformis":
        console.log("(((0.272465) *Math.pow(DBH.2.2389)/1000)*0.46*0.5)*Area*TreeCount");
        SK = (((0.272465) *Math.pow(DBH,2.2389)/1000)*0.46*0.5)*Area*TreeCount;                
        break;
    case "Hopea_odorata":
        console.log("(0.1245*Math.pow(DBH.2.4163)*0.5)*Area*TreeCount");
        SK = (0.1245*Math.pow(DBH,2.4163)*0.5)*Area*TreeCount;                
        break;
    case "Pinus_kesiya":
        console.log("(0.283 / 10 *Math.pow(DBH.2.9037) * 0.5)*Area*TreeCount");
        SK = (0.283 / 10 *Math.pow(DBH,2.9037) * 0.5)*Area*TreeCount;                
        break;
    case "Pinus_merkusii":
        console.log("((0.933 / 10000 * Math.pow(DBH.2.64) ) * 0.5 )*Area*TreeCount;");
        SK = ((0.933 / 10000 * Math.pow(DBH,2.64) ) * 0.5 )*Area*TreeCount;                
        break;
    case "Melaleuca_cajuputi":
        console.log("(0.258*Math.pow(DBH.2.352) * 0.5)*Area*TreeCount");
        SK = (0.258*Math.pow(DBH,2.352) * 0.5)*Area*TreeCount;                
        break;
    case "Cocos_nucifera":
        console.log("((358.1 *DBH)-(14.561 * 0.5))*Area*TreeCount");
        SK = ((358.1 *DBH)-(14.561 * 0.5))*Area*TreeCount;                
        break;
    case "Indosasa_augustata":
        console.log("(0.335 * Math.pow(DBH,0.568) * 0.5)*Area*TreeCount");
        SK = (0.335 * Math.pow(DBH,0.568) * 0.5)*Area*TreeCount;                
        break;
    case "Bambusa_balcooa":
        console.log("(0.0164 * Math.pow(DBH,1.7734) * 0.5)*Area*TreeCount");
        SK = (0.0164 * Math.pow(DBH,1.7734) * 0.5)*Area*TreeCount;                
        break;
    case "Phyllostachys_pubescens":
        console.log("(-5.425 + 622.913*DBH*0.5)*Area*TreeCount");
        SK = (0.00029 * Math.pow(DBH,2.50038) * 0.5)*Area*TreeCount;                
        break;
    case "Rhizopphora_apiculata_Blume":
        console.log("(-5.425 + 622.913*DBH*0.5)*Area*TreeCount");
        SK = (0.3482*Math.pow(DBH,2.2965) * 0.5)*Area*TreeCount;                
        break;
    case "Phyllostachys_pubescens2":
        console.log("(-5.425 + 622.913*DBH*0.5)*Area*TreeCount");
        SK = (3.67*0.5*0.182*Math.pow(DBH,2.16))*Area*TreeCount;                
        break;
    default:
        console.log("(-5.425 + 622.913*DBH*0.5)*Area*TreeCount");
        SK = (0.167*Math.pow(DBH,2.4803))*Area*TreeCount;
  }
  console.log((-5.425 + 622.913*DBH*0.5)*Area*TreeCount);
  
  console.log("SK",SK);
  var result = ((SK/1000)*(wbd/1000)*0.5*44/12).toString();
  var money = (formatCurrency(result*25215*20)).toString() + "đ - " + (formatCurrency(result*25215*100)).toString()+"đ";
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.send({"result":result,"money":money});
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
