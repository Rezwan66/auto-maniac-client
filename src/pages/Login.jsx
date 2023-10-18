import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // resetting the form
    e.currentTarget.reset();

    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        Swal.fire({
          title: 'Awesome!',
          text: 'Signed in successfully!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch(error =>
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Cool',
        })
      );
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: 'Awesome!',
          text: 'Signed in successfully using Google!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch(error =>
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Cool',
        })
      );
  };

  return (
    <div>
      <div className="hero bg-transparent mt-10 mb-28">
        <div className="hero-content">
          <div className="card w-[370px] shadow-2xl bg-base-100 bg-opacity-20 py-6">
            <h1 className="text-4xl font-semibold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered"
                  required
                />
                <label className="mt-4 text-right text-sm">
                  <span>
                    Not a member?{' '}
                    <Link
                      to="/register"
                      className="text-primary text-base font-bold hover:text-secondary"
                    >
                      Register
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-base">
                  Login
                </button>
              </div>
            </form>
            <div className="px-8 mb-4">
              <div className="flex items-center mb-8">
                <div className="border h-[1px] w-full"></div>
                <p className="text-white mx-2"> OR </p>
                <div className="border h-[1px] w-full"></div>
              </div>
              <div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-accent btn-outline bg-base-200 w-full text-base capitalize"
                >
                  <FcGoogle></FcGoogle> Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
