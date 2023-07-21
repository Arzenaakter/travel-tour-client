import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLink from "../../components/SocialLink";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const { CreateUser, userProfile } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch("password");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // form submit
  const onSubmit = (data) => {
    CreateUser(data.email, data.password)
      .then((result) => {
        const SignUpUser = result.user;
        console.log(SignUpUser);

        // update profile s
        userProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              img: data.photo,
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
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Sign Up successful",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                  reset();
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((err) => {
            alert(err.message);
            console.log(err);
          });
      })

      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen  pt-20">
      <div className="hero-content  ">
        <div className="card  w-96 shadow-xl bg-base-300">
          {/* form start */}
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            {/* name field start */}
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-[#D32956] text-sm mt-2">
                  Name field is required
                </span>
              )}
            </div>
            {/* name field end */}
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
            {/* photo field start */}
            <div className="form-control">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-[#D32956] text-sm mt-2">
                  Photo URL field is required
                </span>
              )}
            </div>
            {/* photo field end */}
            {/* password field start */}
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message:
                      "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-[#D32956]">{errors.password.message}</p>
              )}
            </div>
            {/* password field end */}
            {/* Confirm password field start */}
            <div className="form-control">
              <input
                type="password"
                name="confirm"
                placeholder="Confirm password"
                className="input input-bordered"
                {...register("confirm", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirm && (
                <p className="text-[#D32956]">{errors.confirm.message}</p>
              )}
            </div>
            {/* confirm password field end */}

            {/* submit */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign UP"
                className="btn bg-[#F9A51A] hover:bg-[#0B152D] text-white"
              />
              <p className="text-sm text-center mt-2">
                Already have an account ?{" "}
                <Link to="/login" className="text-blue-700 font-bold">
                  LogIn
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

export default SignUp;
