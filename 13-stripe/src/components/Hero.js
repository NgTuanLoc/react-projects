import phoneImg from "../images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return (    
    <div>
      Hero side
    </div>    
  );
};

export default Hero;
