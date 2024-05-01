const express = require('express');
const data = require('../data');
const {authenticateJWT, generateDummyToken} = require('../middlewares/authenticate');

const router = express.Router();

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

// 11.Write a series of middleware functions and chain them together to demonstrate how multiple middleware can be applied to a single route.