import Nav from "../nav/Nav"

const Header = (props) => (
    <header className="h-16 bg-gray-700 text-gray-100 flex items-center">
        {/* 左側の余白 */}
        <div className="w-24"></div>
        {/* ページタイトル */}
        <div className="flex-initial text-xl italic tracking-wider">{props.site.name}</div>
        {/* 中央の余白 */}
        <div className="flex-1"></div>
        {/* ナビゲーションメニュー */}
        <Nav links={props.links} className="flex-initial" />
    </header>
);

export default Header;