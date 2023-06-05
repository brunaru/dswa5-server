import dotenv from 'dotenv'
import { S3Client } from '@aws-sdk/client-s3'
import multerS3 from 'multer-s3'

dotenv.config()

const s3EndPoint = process.env.S3_ENDPOINT
const s3Key = process.env.S3_AKEYID
const s3SecretKey = process.env.S3_SECRETAKEY

const s3Client = new S3Client({
    endpoint: s3EndPoint,
    credentials: {
        accessKeyId: s3Key,
        secretAccessKey: s3SecretKey,
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    region: 'us-east-1',
})

const armazenamentoS3 = multerS3({
    s3: s3Client,
    bucket: 'devweb5',
    acl: 'public-read',
    key: function (request, arquivo, cb) {
        cb(null, Date.now() + '-' + arquivo.originalname)
    }
})

export default armazenamentoS3