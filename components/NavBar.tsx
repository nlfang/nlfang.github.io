
export default function NavBar() {
  return (
    <div className="navbar bg-base-100 flex items-center justify-center">
      <a className="btn btn-ghost text-lg" href="/">
        Home
      </a>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-x-2">
          <li className="px-1">
            <a className="btn btn-ghost text-lg" href="/projects">
              Projects
            </a>
          </li>
          <li className="px-1">
            <a className="btn btn-ghost text-lg" href="/hobbies">
              Hobbies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
