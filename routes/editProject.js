
const express = require('express')
const router = express.Router()
const { db } = require('../utils/db')


router.post('/', async (req, res) => {
    try {
        const { pid, title, startDate, endDate, description, phase } = req.body

        if (!title || !startDate || !endDate || !description || !phase) {
            res.status(400).json({message: "Missing values"});
            return
        }

        
        
        res.status(200).json({message: "Successfull", token: accessToken, refresh: refreshToken, user: existingUser})

    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }
})

module.exports = router