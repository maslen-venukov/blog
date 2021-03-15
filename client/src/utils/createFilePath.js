import { serverUrl } from '../constants'

const createFilePath = filename => `${serverUrl}/uploads/${filename}`

export default createFilePath