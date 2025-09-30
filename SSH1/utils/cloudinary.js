const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploadBuffer = async (buffer, folder = "tresetu") => {
  // Cloudinary accepts streams - convert buffer to base64 data URI
  const b64 = buffer.toString("base64");
  const dataUri = "data:image/jpeg;base64," + b64;
  const res = await cloudinary.uploader.upload(dataUri, { folder, resource_type: "auto" });
  return res.secure_url;
};

module.exports = { cloudinary, uploadBuffer };
