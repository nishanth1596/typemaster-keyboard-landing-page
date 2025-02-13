import logo from "../assets/shared/logo.svg";
import PreOrder from "./PreOrder";

function Header() {
  return (
    <header className="w-full max-w-[69.375rem]">
      <nav className="mt-6 flex w-full items-center justify-between px-6 md:mt-10 md:px-10 xl:mt-14 xl:px-0">
        <img src={logo} alt="Typemaster Logo" />
        <PreOrder style="light" />
      </nav>
    </header>
  );
}

export default Header;
