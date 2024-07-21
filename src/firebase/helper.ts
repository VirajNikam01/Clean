import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { fireAuth, fireDB } from "./firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const createUserAccount = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(fireAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user.uid);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errMessage = error.message
                reject(error);
            });
    });
};


type TaddUserWithDataToFireStore = {
    name: string,
    email: string,
    password: string
}

const addUserWithDataToFireStore = (event: TaddUserWithDataToFireStore) => {

    return new Promise(async (resolve, reject) => {
        try {
            const userID = await createUserAccount(event.email, event.password)
            const UserInfo = {
                ...event, //data from form
                uid: userID,
                role: "User",
                time: { ...Timestamp.now() },
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };

            //create userRefrence
            const userRefrence = collection(fireDB, "users");
            //add userDetails
            await addDoc(userRefrence, UserInfo)
            resolve(null)

        } catch (error) {
            reject(error)
        }
    })


}

type TsignInUser = {
    email: string,
    password: string
}
const signInUser = (event: TsignInUser) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(fireAuth, event.email, event.password)
            .then((userCredential) => {
                const user = userCredential.user
                resolve(user.uid)
            })
            .catch((error) => {
                reject(error)
            })
    })
}



export { addUserWithDataToFireStore, signInUser }