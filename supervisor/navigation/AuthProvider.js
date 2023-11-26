import React, {useState, useEffect, createContext,} from 'react';
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

   

    return (
        <AuthContext.Provider 
        value={{
            user,
            setUser,
            logging: async(email,password) => {
                try{
                    await auth().signInWithEmailAndPassword(email,password)
                    
                }catch(e){
                    console.log(e);
                }
            },
            logout: async(email,password) => {
                try{
                    await auth().signOut();
                }catch(e){
                    console.log(e);
                }
            },
        }} 
        >
            {children}
        </AuthContext.Provider>
    );
}

