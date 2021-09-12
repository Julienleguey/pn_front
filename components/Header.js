import Link from "./Shared/Link";

const Header = () => {
  return (
    <div className="border-bottom d-flex ai-center px-4 h-7 w-100" id="header">
      <Link href="/" className="text-center px-3 py-2">
        <img src="/home.svg" alt="home" className="w-5" />
      </Link>
    </div>
  );
};

export default Header;
