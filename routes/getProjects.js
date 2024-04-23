
const express = require('express')
const { getProjects } = require('../services/getProjects')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const projects = await getProjects()
        res.status(200).json({message: "Successfull", projects})

    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }
})

module.exports = router