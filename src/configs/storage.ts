import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface"
import { diskStorage } from "multer"
import { extname } from "path"

const storageOptions: MulterOptions = {
  storage: diskStorage({
      destination:  `./public/uploads`,
      filename: function (req, file, cb) {
        const uniqueSuffix = '-' + Date.now() + Math.round(Math.random() * 1E9)
        cb(null, file.originalname.split('.')[0] + uniqueSuffix + extname(file.originalname))
      }
    })
}

export{
  storageOptions,
}
