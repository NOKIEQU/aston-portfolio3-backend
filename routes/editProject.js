
const express = require('express')
const router = express.Router()
const { editProject, getProjectID } = require('../services/getProjects')
const { getUserByID } = require('../services/getUsers')


router.post('/', async (req, res) => {
    try {
        const { pid, title, startDate, endDate, description, phase, uid } = req.body

        if (!pid || !title || !startDate || !endDate || !description || !phase) {
            res.status(400).json({ message: "Missing values" });
            return
        }

        if (!phase === "design" || !phase === "development" || !phase === "testing" || !phase === "deployment" || !phase === "complete") {
            res.status(500).json({ message: "Phase value is wrong" })
            return
        }

        const user = await getUserByID(uid)
        const oldProject = await getProjectID(pid)

        if (user.uid !== oldProject.userId) {
            res.status(500).json({ message: "You are not the owner" })
            return
        }

        const newProject = await editProject(pid, title, startDate, endDate, description, phase)

        res.status(200).json({ message: "Successfull", newProject })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router