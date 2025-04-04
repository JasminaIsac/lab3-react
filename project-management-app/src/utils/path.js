export function compilePath(path) {
    // Face escape la caracterele speciale din path
    const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Cream un regex care va verifica întreaga expresie și sa fie case-insensitive
    const regex = new RegExp(`^${escapedPath}$`, "i");
    return regex;
}

export function matchRoutes(children, location) {
    // Parcurgem fiecare copil și verificăm dacă calea din URL se potrivește cu calea copilului
    for (const route of children) {
        const regex = compilePath(route.props.path);
        if (regex.test(location)) {
            // Dacă calea se potrivește, returnăm componenta copilului
            return route;
        }
    }
    // Dacă nu se potrivește niciun copil, returnăm null
    return null;
}
