import Story from '../models/Story.js'

export const create = async (req, res) => {
  try {
    const { role } = req.user
    if(role !== 'OWNER')
      return res.status(400).json({ message: 'Недостаточно прав' })

    const { title } = req.body
    const media = req.file.filename
    const type = req.file.mimetype.split('/')[0]

    const story = new Story({
      title,
      media,
      type
    })

    await story.save()
    return res.json(story)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Что-то пошло не так' })
  }
}

export const read = async (req, res) => {
  try {
    const stories = await Story.find({}).sort({ _id: -1 }).limit(4)
    return res.json(stories)
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: 'Что-то пошло не так' })
  }
}