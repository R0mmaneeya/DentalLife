const express = require("express"); 
const router = express.Router();
const book = require("../controllers/Booking");
const clinic = require("../controllers/clinic")

router.post("/booking", book.booking);
router.post("/clinic",clinic.clinic );
router.post("/craft",clinic.craft );
router.get("/databooking", book.databooking);
router.post("/scheduling",clinic.scheduling);
router.post("/regisDent",clinic.regisDent);
router.put("/dentEdit",clinic.edit);
router.get("dataDent" , clinic.dataDent);


module.exports = router;