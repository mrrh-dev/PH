function Logo() {
  return <h2>Logo</h2>;
}
function Menu() {
  return <ul>Menu</ul>;
}
export default function Navbar() {
  return (
    <nav>
      <Logo></Logo>
      <Menu></Menu>
    </nav>
  );
}
