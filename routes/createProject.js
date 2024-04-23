
const express = require('express')
const router = express.Router()
const { createProject } = require('../services/getProjects')


router.post('/', async (req, res) => {
    try {
        const { title, startDate, endDate, description, phase, uid } = req.body

        if (!title || !startDate || !endDate || !description || !phase || !uid) {
            res.status(400).json({ message: "Missing values" });
            return
        }

        if (!phase === "design" || !phase === "development" || !phase === "testing" || !phase === "deployment" || !phase === "complete") {
            res.status(500).json({ message: "Phase value is wrong" })
            return
        }


        const newProject = await createProject(title, startDate, endDate, description, phase, uid)

        res.status(200).json({ message: "Successfull", newProject })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router