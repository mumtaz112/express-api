const app = require('express')

const router = app.Router();

const { getallcategory,getcategorybyid,createcategory,updatecategory,deletecategory } = require('./Controller')



router.get('/getallcategory', getallcategory)
router.get('/getcategorybyid', getcategorybyid)
router.post('/createcategory', createcategory)
router.put('/updatecategory', updatecategory)
router.delete('/deletecategory', deletecategory)

module.exports = router;