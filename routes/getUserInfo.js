
const express = require('express')
const { getUserByID } = require('../services/getUsers')
const router = express.Router()


router.post('/', async (req, res) => {
    const { uid } = req.body

    try {
        const user = await getUserByID(uid)
        delete user.password
        res.status(200).json({message: "Successfull", user})

    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
    }
})

module.exports = router