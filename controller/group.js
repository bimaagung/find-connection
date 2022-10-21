const resData = require('../helper/reponse')

module.exports = {
  createGroup: async (req, res) => {
    let group = req.body

    let data = await req.GroupUC.createGroup(group)

    if (data === null) {
      return res.status(400).json(resData.failed('group already exists'))
    }

    return res.status(200).json(resData.success(data))
  },
}
