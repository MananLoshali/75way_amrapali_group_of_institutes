import exp from "constants";
import express, { Router } from "express";
import multer from "multer";

const router = express.Router();

const storage: multer.StorageEngine = multer.diskStorage({
    destination(req, file, callback) {
        return callback(null, "./uploads")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage });



router.post("/upload", upload.single('image'), (req, res) => {
    console.log(req.file?.path);
    const isUploaded = uploadImage(req.file?.path);
    isUploaded.then(data => res.json({ msg: "Image uploaded ", url: data.url })).catch(error => {
        console.log(error);
        res.status(402).json({ msg: "error while uploading", error });
    });
});
export default router;

// ------------------------------------------------------------------------- uploadImage.ts
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: 'dardsmxjx',
    api_key: '779321246947237',
    api_secret: 'MIxuC666-m95tGNPFKWfirZb_QQ'
});


export const uploadImage = async (localFilePath: string): Promise<UploadApiResponse> => {
    console.log("File uploaded started");
    const res = await cloudinary.uploader.upload(localFilePath);
    console.log("File uploaded ended");
    console.log(res);
    console.log("File uploaded finished");

    return res;
}