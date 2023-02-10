interface Props {
    title?: string;
}

const Header = ({ title = 'Todo List' }: Props) => {
    return <section className="text-3xl font-bold text-zinc-900">{title}</section>;
};

export default Header;
