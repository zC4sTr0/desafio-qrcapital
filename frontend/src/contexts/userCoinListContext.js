import { createContext, useState } from "react";

const UserCoinListContext = createContext({});

export const UserCoinProvider = ({ children }) => {
  const [userCoinList, setUserCoinList] = useState(null);
  return (
    <UserCoinListContext.Provider value={{ userCoinList, setUserCoinList }}>
      {children}
    </UserCoinListContext.Provider>
  );
};

export default UserCoinListContext;
