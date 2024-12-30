import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-accent">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-primary">Sörfőzde</Link>
      </div>

      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li class="text-neutral">
            <Link to="/breweries">Sörfőzdék listája</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
