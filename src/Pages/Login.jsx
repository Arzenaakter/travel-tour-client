import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SocialLink from "../components/SocialLink";

const Login = () => {
  const { LoggedUser } = useAuth();

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    LoggedUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        Swal.fire({
          title: "LogIn successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
        reset();

        console.log(loggedUser);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen pt-10 ">
      <div className="hero-content  ">
        <div className="card  w-96  shadow-xl bg-base-300">
          {/* form start */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            {/* email field start */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-[#D32956] text-sm mt-2">
                  Email field is required
                </span>
              )}
            </div>
            {/* email field end */}

            {/* password field start */}
            <div className="form-control">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-[#D32956] text-sm mt-2">
                  Password field is required
                </span>
              )}
              <p
                onClick={() => setShow(!show)}
                className="mt-4 ms-72 z-10 absolute">
                <small>
                  {show ? (
                    <span className=" ">
                      <FiEyeOff size={24} />
                    </span>
                  ) : (
                    <span className="">
                      <FiEye size={24} />
                    </span>
                  )}
                </small>
              </p>
            </div>
            {/* password field end */}

            {/* submit */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#F9A51A] hover:bg-[#0B152D] text-white"
              />
              <p className="text-sm text-center mt-2">
                New to Travel & Tour ?{" "}
                <Link to="/signUp" className="text-blue-700 font-bold">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
          <div className="divider px-8 -mt-4">OR</div>
          <div className="form-control mb-5 px-8">
            <SocialLink></SocialLink>
          </div>

          {/* form end */}
        </div>
      </div>
    </div>
  );
};

export default Login;
