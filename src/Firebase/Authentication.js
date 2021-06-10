import { auth, fstore } from "./Firebase";

const createUser = (email, password, fullname, username) => {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user.updateProfile({ displayName: username });
        fstore.collection("users").doc(user.user.uid).set({
          fullname,
          username,
        });
        fstore
          .collection("users")
          .doc("USERNAMES")
          .update({ [user.user.uid]: username });
        resolve({
          statusCode: 1,
          status: "REGISTERED",
        });
      })
      .catch((err) => {
        reject({ statusCode: 0, status: "FAILED", error: { ...err } });
      });
  });
};

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        resolve({ statusCode: 5, message: "SignIn Success" });
      })
      .catch((err) => {
        reject({
          statusCode: 6,
          status: "Error Signing In",
          error: { ...err },
        });
      });
  });
};

const checkUserNames = (username) => {
  return new Promise((resolve, reject) => {
    fstore
      .collection("users")
      .doc("USERNAMES")
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        const usernames = Object.values(data);
        console.log(usernames);
        if (usernames.indexOf(username) == -1) {
          resolve({
            status: 3,
            message: "Username doesn't exist",
          });
        } else {
          reject({
            status: 4,
            message: "Username already exist",
          });
        }
      });
  });
};

const updateProfile = (user, { displayName, photoURL }) =>
  user.updateProfile({ displayName, photoURL });

const signOut = () => auth.signOut();

export { createUser, signIn, updateProfile, signOut, checkUserNames };
