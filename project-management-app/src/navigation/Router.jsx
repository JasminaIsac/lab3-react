import { useState, useEffect } from "react";
import { RouterContext } from "@context/RouterContext";

export function Router({ children }) {
    // Starea location e utilizată pentru a ține cont de calea din URL actuală
    const [location, setLocation] = useState(window.location.pathname);

    // Funcția handlePush e utilizată pentru a schimba calea din URL fără a reîncărca pagina
    const handlePush = (newLocation) => {
        console.log(`Navigating to ${newLocation}`);
        window.history.pushState({}, "", newLocation);
        setLocation(newLocation);
    };

    // Funcția handleChange e utilizată pentru a actualiza starea location când calea din URL se schimbă
    const handleChange = () => {
        setLocation(window.location.pathname);
    };

    // Efectul folosit pentru a adăuga și elimina event listener-ul pentru schimbarea caii din URL
    useEffect(() => {
        window.addEventListener("popstate", handleChange);
        return () => window.removeEventListener("popstate", handleChange);
    }, []);

    // Valoarea contextului oferită copiilor
    const value = { location, push: handlePush };

    return (
        <RouterContext.Provider value={value}>
            {children}
        </RouterContext.Provider>
    );
}