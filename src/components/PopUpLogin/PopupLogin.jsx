import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { saveUser } from "../../hooks/useUserInfo";
import { FaGithub } from "react-icons/fa";

const PopupLogin = () => {
  const { signInWithGoogle, signInWithGitHub, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Login Successfully!");
        console.log(result);
        // TODO: save user to db by using custom hook fetch
        saveUser(result.user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      });
  };

   const handleGitHubSignIn = (event) => {
     event.preventDefault();
     signInWithGitHub()
       .then((result) => {
         const loggedInUser = result.user;
         console.log(loggedInUser);
         saveUser(loggedInUser);
          setLoading(false);
         navigate(from, { replace: true });
       })
       .catch(console.error());
   };

  return (
    <>
      <div className="py-6 flex justify-center items-center space-x-4">
        <div
          onClick={handleGitHubSignIn}
          className="items-center cursor-pointer  duration-200 justify-center inline-flex"
        >
          <FaGithub className="text-4xl text-white"></FaGithub>
        </div>
        <span
          onClick={handleGoogleSignIn}
          className="w-9 h-9 hover:bg-rosered  items-center justify-center inline-flex rounded-full font-bold text-lg border-2 hover:border-rosered cursor-pointer duration-200 border-white"
        >
          G+
        </span>
      </div>
    </>
  );
};

export default PopupLogin;
