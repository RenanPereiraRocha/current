import Link from "next/link";
const MenuEstilo = {
    marginRight: 15
}
const Menu = () => {
    return(
        <div>
            <Link href="/">
                <a style={MenuEstilo}>Início</a>
            </Link>
            <Link href="/projetos">
                <a style={MenuEstilo}>Projetos</a>
            </Link>
            <Link href="/sobre">
                <a style={MenuEstilo}>Sobre</a>
            </Link>
            <Link href="/contato">
                <a style={MenuEstilo}>Contato</a>
            </Link>
        </div>
    )
}
export default Menu;