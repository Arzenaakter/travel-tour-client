import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLink = () => {
  const { googleSignIn, userProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          img: loggedUser.photoURL,
          role: "Customer",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });

        userProfile(loggedUser.displayName, loggedUser.photoURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-[#0B152D] hover:bg-[#D32956] text-white  ">
        {" "}
        <FcGoogle size={24} />
        <span> Google Login</span>
      </button>
    </>
  );
};

export default SocialLink;
