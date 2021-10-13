import Nav from "../nav/Nav"

const Header = (props) => (
    <header className="h-12 bg-black opacity-70 text-white flex items-center">
        {/* 左側の余白 */}
        <div className="flex-1"></div>
        {/* ページタイトル */}
        <div className="flex-initial text-2xl tracking-widest">{props.site.name}</div>
        {/* 中央の余白 */}
        <div className="w-28"></div>
        {/* ナビゲーションメニュー */}
        <Nav links={props.links} className="flex-initial" />
        {/* 右側の余白 */}
        <div className="flex-1"></div>
    </header>
);

export default Header;