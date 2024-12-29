import logo from "../assets/talk.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between p-16 pt-9">
        <div className="pl-10 flex items-center space-x-1">
          <div className="text-white">
            <img
              src={logo}
              height={30}
              width={30}
              style={{ filter: "invert(1) brightness(2)" }}
            />
          </div>
          <div className="text-xl font-semibold">Spoke</div>
        </div>
        <div className="flex items-center space-x-8 pr-10">
          <div>
            <Button>Login</Button>
          </div>
          <div>
            <Button>Signup</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
