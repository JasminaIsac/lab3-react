import { useRouterContext } from "@/context/RouterContext";

export function Link({ to, children, ...rest }) {
    const { push } = useRouterContext();

    function handleClick(e) {
        e.preventDefault();
        push(to);
    }

    return (
        <a href={to} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
}