import multer, { StorageEngine } from "multer";
import { Request } from "express";

const storage: StorageEngine = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
