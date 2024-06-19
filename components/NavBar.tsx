export default function NavBar() {
  return (
    <div className="navbar bg-base-100 flex justify-center">
      <div className="flex flex-1 justify-center items-center">
        <ul className="flex space-x-4">
          <li>
            <a className="btn btn-ghost text-lg" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="btn btn-ghost text-lg" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="btn btn-ghost text-lg" href="/hobbies">
              Hobbies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
