import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('Jasmina');

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};

const useCurrentUser = () => useContext(CurrentUserContext);

export default useCurrentUser;