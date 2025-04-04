import { useRouterContext } from "@context/RouterContext";
import { matchRoutes } from "@utils/path";
import NotFound from "@pages/NotFound";

export function Routes({ children }) {
    // Obținem locația curentă
    const { location } = useRouterContext();

    // Căutăm ruta care se potrivește cu locația curentă
    const match = matchRoutes(children, location);

    // Dacă nu există nicio potrivire, afișăm pagina 404
    if (!match) return <NotFound />;

    // Întoarcem componenta care se potrivește cu locația curentă
    return <>{match}</>;
}