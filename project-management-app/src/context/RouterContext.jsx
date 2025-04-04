import { createContext, useContext } from "react";

export const RouterContext = createContext({
    location: "/",
    push: () => {},
});

export const useRouterContext = () => {
    return useContext(RouterContext);
};
