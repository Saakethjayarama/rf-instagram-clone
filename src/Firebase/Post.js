import { fstore, storage } from "./Firebase";

const createPost = (file, data) => {
  const date = new Date();
  const storageRef = storage.ref();

  return new Promise((resolve, reject) => {
    const fileName = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}_${Date.now()}-${file.name}`;
    storageRef
      .child("posts/" + fileName)
      .put(file)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then(async (url) => {
        const postId = fstore.collection("posts").doc().id;

        await fstore
          .collection("posts")
          .doc(postId)
          .set({ ...data, url, fileName, time_stamp: Date.now() });
        await fstore
          .collection("posts")
          .doc("POSTS")
          .update({ [postId]: Date.now() });

        resolve({
          statusCode: 7,
          status: "Uploaded",
          url: url,
        });
      })
      .catch((err) => {
        reject({
          statusCode: 8,
          status: "Error Uploading",
          error: err,
        });
      });
  });
};

export { createPost };
