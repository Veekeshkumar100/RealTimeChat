import {v2 as cloudinary} from "cloudinary";
import fs from "fs";



cloudinary.config({
  cloud_name: 'dkjgwiyfr', // Add your Cloudinary cloud name here
  api_key: '768852714723619', // Add your Cloudinary API key here
  api_secret: 'I4GcsxD3MCCiCVIT93Jy-Gx9wbU'

 // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudnary=async (localFilePath)=>{

  try {
    if(!localFilePath) return null;
    const response= await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"});
   
      fs.unlinkSync(localFilePath);
      return response;
  } catch (error) {
        console.error("error in uploadOnCloudnary", error.message);
   fs.unlinkSync(localFilePath)
   return null;
  }
}

export {uploadOnCloudnary}