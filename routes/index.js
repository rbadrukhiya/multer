var express = require('express');
var router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/adddata', upload.single('file') ,async function(req, res, next) {
    try{
          console.log(req.file);
    }
    catch(err)
    {
      console.log(err);
    } 
});




module.exports = router;
