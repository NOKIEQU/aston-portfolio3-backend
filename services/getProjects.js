const { db } = require('../utils/db')

async function getProjects() {

  try {
    return db.projects.findMany()
  } catch (err) {
    return "Projects not Found"
  }
}

async function getProjectID(id) {

  try {
    return db.projects.findFirst({
      where: {
        id
      },

    })
  } catch (err) {
    return "Project not Found"
  }
}

async function GetProjectFilter(title, date) {

  try {
    return db.projects.findMany({
      where: {
        OR: [
          {
            title: title
          },
        ],
        OR: [
          {
            start_date: date
          },
        ],
      },
    })
  } catch (err) {
    return "Project not Found"
  }
}

async function editProject(title, startDate, endDate, description, phase) {
  try {
    return db.projects.update({
      where: {
        pid: 
      }
    })
  } catch (err) {
    return "Project not Found"
  }
}

module.exports = { getProjects, getProjectID, GetProjectFilter }


