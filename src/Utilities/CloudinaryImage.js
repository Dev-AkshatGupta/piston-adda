import { notifyError } from "./Notifications";
import { editUser } from "Redux/Reducers-Redux/authSlice";

export const settingsImageHandler = async (details,dispatch) => {
  try {
    const data = new FormData();
    data.append("file", details.profilePhoto.chosen);
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_NAME);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_KEY);

    fetch(process.env.REACT_APP_CLOUDINARY_LINK_KEY ?? "", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const obj = {
          ...details,
          profilePhoto: {
            default: details.profilePhoto.default,
            chosen: data.secure_url,
          },
        };

        dispatch(editUser(obj));
      });
  } catch (error) {
    notifyError("Can't uplaod image");
    console.log(error);
  }
};