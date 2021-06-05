import { createContext } from 'react';
const UserContext = createContext({
    email: ``,
    userId: ``,
    isAuthenticated: false,
});

export default UserContext;