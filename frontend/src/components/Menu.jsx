import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-primary">Sörfőzde</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link to="/breweries">Sörfőzdék listája</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
