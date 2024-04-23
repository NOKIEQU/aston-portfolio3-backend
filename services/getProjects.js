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
        pid: id
      },

    })
  } catch (err) {
    return "Project not Found"
  }
}

async function GetProjectFilter(title, date) {


  // try {
  //   return db.projects.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: title
  //         },
  //       ],
  //       OR: [
  //         {
  //           start_date: date
  //         },
  //       ],
  //     },
  //   })
  // } catch (err) {
  //   return "Project not Found"
  // }
  if (title !== "") {
    try {
      return db.projects.findMany({
        where: {
          title: title
        },
  
      })
    } catch (err) {
      return "Project not Found"
    }
  } else {

    const pDate = new Date(date)

    try {
      return db.projects.findMany({
        where: {
          start_date: pDate
        },
  
      })
    } catch (err) {
      return "Project not Found"
    }
  }

}

async function editProject(pid, title, startDate, endDate, description, phase) {

  const sd = new Date(startDate)
  const ed = new Date(endDate)

  try {
    return db.projects.update({
      where: {
        pid: pid
      },
      data: {
        pid: pid,
        title: title,
        start_date: sd,
        end_date: ed,
        description: description,
        phase: phase
      }
    })
  } catch (err) {
    return "Project not Found"
  }
}

async function createProject(title, startDate, endDate, description, phase, uid) {

  const sd = new Date(startDate)
  const ed = new Date(endDate)
  console.log(uid)
  try {
    return db.projects.create({
      data: {
        title: title,
        start_date: sd,
        end_date: ed,
        description: description,
        phase: phase,
        userId: uid
      }
    })
  } catch (err) {
    return "Couldnt create the project"
  }
}

module.exports = { getProjects, getProjectID, createProject, editProject, GetProjectFilter }


