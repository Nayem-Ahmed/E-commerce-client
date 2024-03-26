import axios from "axios";

export const imgUpload = async (photo) => {
    const formDataToSend = new FormData();
    formDataToSend.append('image', photo);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`, formDataToSend

    );
    return data

}