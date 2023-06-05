import multer from 'multer'
import armazenamentoS3 from '../config/storage.js'

const uploadArquivo = multer({
  storage: armazenamentoS3
})

export default uploadArquivo