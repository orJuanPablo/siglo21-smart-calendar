import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./config";

const collectionName = "events";
export const saveEvent = async (newEvent) => {
  addDoc(collection(db, collectionName), newEvent);
};
export const onGetEvents = async (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};
export const getEventList = async () => {
  const eventsList = [];
  const docs = await getDocs(collection(db, collectionName));
  docs.forEach((doc) => {
    const data = doc.data();
    data.start = data.start.toDate();
    data.end = data.end.toDate();
    eventsList.push(data);
  });
  return eventsList;
};
