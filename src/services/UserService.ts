import { getDatabase, onValue, ref, set, get } from "firebase/database";
import { User } from "../models/Users";
import { resolve } from "path";

export function getUsers(onResult: (users: User[]) => void) {
    const db = getDatabase();
    
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
        const data = snapshot.val();    
        if (data) {
            let users: User[] = []
            const keys = Object.keys(data)
            users = keys.map((key_: any) => {
                const user_ = data[key_]
                const user: User = {
                    name: user_.name,
                    userID: user_.userID,
                }
                return user
            })
            onResult(users)
        }
    });
}

export function getUser(userID: string): Promise<User> {
    const db = getDatabase();
    const userRef = ref(db, "users/" + userID);
    
    return new Promise((resolve) => {
        get(userRef).then((snapshot) => {
            const data = snapshot.val();
            const user: User = {
                name:data.name,
                userID:data.userID,
            }
            resolve(user)
        });
    })
}

export function addUser(user: User) {
    const db = getDatabase();
    set(ref(db,'users/' + user.userID), user);
}