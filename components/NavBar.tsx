export default function NavBar() {
  return (
    <div className="navbar bg-base-100 flex justify-end gap-x-2">
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <a href="/">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </a>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-x-2">
          <li>
		  	    <a href="/about">About</a>
          </li>
          <li>
                <a href="/projects">Projects</a>
          </li>
          <li>
                <a href="/hobbies">Hobbies</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
