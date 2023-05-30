import React, { createContext, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export interface UserLogin {
 name:string,
 lastName:string,
 country:string,
 datesBirth:string,
 email:string
}

const initialValue: UserLogin = {
  name: "",
  lastName: "",
  country: "",
  datesBirth: "",
  email: "",
};

export type UserLoginContextType = {
  userLogin: UserLogin;
  setUserLogin: (userLogin:UserLogin) => void
};


const initialValueForContext = {
  userLogin: initialValue,
  setUserLogin: (userLogin: UserLogin) => {}
}


const UserLoginContext = createContext<UserLoginContextType>(
  initialValueForContext
);

const UserLoginProvider = ({ children }:Props) => {

  const [userLogin, setUserLogin] = useState<UserLogin>(initialValue);

  return (
    <UserLoginContext.Provider value={{userLogin, setUserLogin}}>
      {children}
    </UserLoginContext.Provider>
  );
};

export { UserLoginProvider };

export default UserLoginContext;
