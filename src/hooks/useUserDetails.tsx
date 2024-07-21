import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { fireAuth, fireDB } from "../firebase/firebaseConfig"
import { useDispatch } from "react-redux"
import { addUser, removeUser, addUserDetails, setDataLoaded } from "../redux/userSlice"
import { collection, onSnapshot, query, where } from "firebase/firestore"


const useUserDetails = () => {
    const dispatch = useDispatch()

    const getUser = () => {
        onAuthStateChanged(fireAuth, (user) => {
            if (user) {
                const uid = user.uid
                dispatch(addUser(uid))
                getUserDocFromUid(uid)
            } else {
                dispatch(removeUser())
            }
            //update user State
            dispatch(setDataLoaded())
        })

    }


    ////////////////////////////////////////////
    const getUserDocFromUid = (uid: string) => {
        const q = query(
            collection(fireDB, 'users'),
            where('uid', '==', uid)
        )


        const data = onSnapshot(q, (QuerySnapshot) => {
            let user;
            QuerySnapshot.forEach((doc) => user = doc.data());

            dispatch(addUserDetails(user))
        });


        return data
    }



    useEffect(() => {
        getUser()

    }, [])

}

export default useUserDetails