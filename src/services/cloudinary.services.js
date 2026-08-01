export const uploadImage = async (file) => {
    if(!file){
        throw new Error("No file provided for upload");
    }
    const formData = new FormData();

    formData.append("file",file);
    formData.append("upload_preset","book_images");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkvtcycah/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();
    console.log(data.secure_url)
    return data.secure_url;
}


export const uploadProfileImage = async (file) => {
    if(!file){
        throw new Error("No file provided for upload");
    }
    
    const formData = new FormData();

    formData.append("file",file);
    formData.append("upload_preset","profile_images");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkvtcycah/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();
    console.log(data.secure_url)
    return data.secure_url;
}