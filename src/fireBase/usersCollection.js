import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./config";

const collectionName = "users";
export const saveUser = async (newUser) => {
  addDoc(collection(db, collectionName), newUser);
};
export const getUserList = async () => {
  const userList = [];
  const docs = await getDocs(collection(db, collectionName));
  docs.forEach((doc) => userList.push(doc.data()));
  return userList;
};
export const getUser = async (id) => getDoc(doc(db, collectionName, id));
