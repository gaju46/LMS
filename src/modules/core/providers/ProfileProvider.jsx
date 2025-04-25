import React,{useState} from "react";


const initialValues = {
  user: null, 
  setUser: () =>{}
}

export const ProfileContext = React.createContext(initialValues)

const ProfileProvider = ({childern}) =>{
  const [user, setUser]= useState({id:"1",email:"testuser@gmail.com"})
  return(
    <ProfileContext.Provider value={{
      setUser,
      user

    }}> 
      {childern}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider