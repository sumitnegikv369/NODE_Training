const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
// const locationValidation = require("../middlewares/locationValidation");
const queryValidation = require("../middlewares/queryValidaton");
const data = require('../data');
const {authenticateJWT, generateDummyToken} = require('../middlewares/authenticate');
const router = express.Router();

router.post("/validate", validateRequest, (req, res) => {
    res.json({message: "user validated!"})
});

// router.get("/profile", locationValidation, (req, res) => {
//     res.json({message: "user profile access"})
// });

router.post("/post/:id", queryValidation, (req, res) => {
    res.json({message: `user ${req.params.id} validated`})
});

router.get('/profile', generateDummyToken, authenticateJWT, (req, res)=>{
    res.json({message: "authenticated successfully"})
})

router.post('/data', generateDummyToken, authenticateJWT, async(req, res)=>{
    try {
            const seededData = await data.getData();
            res.json(seededData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;