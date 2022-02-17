import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "mattezl", //process.env.CLOUD_NAME,
  api_key: 243842342754734, //process.env.API_KEY,
  api_secret: "s7xSV5BGEp1honbjGCqCKuw_tq0", //process.env.API_SECRET
});

export const uploadImage = async (file) => {
  try {
    // Upload image
    const res = await cloudinary.v2.uploader.upload(file, {
      folder: "gladys",
    });
    return res.secure_url;
  } catch (error) {
    throw error;
  }
};