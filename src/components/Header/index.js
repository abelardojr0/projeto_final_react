import { Link, Outlet } from "react-router-dom";
import { HeaderList, HeaderListItem } from "./style";

function Header() {
  return (
    <>
      <nav>
        <HeaderList>
          <li>
            <HeaderListItem to={"/"}>Home</HeaderListItem>
          </li>
          <li>
            <HeaderListItem to={"/mmorpg"}>MMORPG</HeaderListItem>
          </li>
          <li>
            <HeaderListItem to={"/fps"}>FPS</HeaderListItem>
          </li>
          <li>
            <HeaderListItem to={"/moba"}>MOBA</HeaderListItem>
          </li>
        </HeaderList>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
