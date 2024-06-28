import { FcReddit } from "react-icons/fc";
import { useLocation, Link } from "wouter";
import Button from "../../Common/Button";
import useStore from "../../../store/useStore";
import { useLogout } from "../../../hooks/useAuth";

const Header = () => {
  const logoutMutation = useLogout();
  const user = useStore((state) => state.user);
  const [, setLocation] = useLocation();
  return (
    <header className="sticky top-0 bg-stone-800 text-white p-4 flex justify-between items-center z-10">
      <Link to="/">
        <div className="flex items-center gap-x-2">
          <div
            className="bg-orange-500 rounded-full flex items-center justify-center "
            style={{ width: "40px", height: "40px" }}>
            <FcReddit className="flex" size={32} style={{}} />
          </div>
          <span className="font-bold text-orange-500 text-3xl md:text-5xl hidden md:block">
            Reddit
          </span>
        </div>
      </Link>
      <nav>
        {user ? (
          <Button
            color={"orange"}
            text={"Cerrar sesión"}
            onClick={() => {
              logoutMutation.mutate();
            }}
          />
        ) : (
          <Button
            color={"orange"}
            text={"Iniciar sesión"}
            onClick={() => {
              setLocation("/login");
            }}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
