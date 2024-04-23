
const express = require('express')
const router = express.Router()
const { GetProjectFilter } = require('../services/getProjects')


router.post('/', async (req, res) => {
    try {
        const { startDate, title } = req.body

        if (!title && !startDate) {
            res.status(400).json({ message: "Missing values" });
            return
        }

        const projects = await GetProjectFilter(title, startDate)

        res.status(200).json({ message: "Successfull", projects })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router