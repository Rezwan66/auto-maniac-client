import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // password validation
    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/.test(
        password
      )
    ) {
      return Swal.fire({
        title: 'Error!',
        text: 'Password must be at least 6 characters long and include at least one capital letter and one special character!',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    createUser(email, password)
      .then(() => {
        updateUser(name, photo)
          .then(() => {
            Swal.fire({
              title: 'Awesome!',
              text: 'Created User successfully!',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
          })
          .catch(error =>
            Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: 'error',
              confirmButtonText: 'Cool',
            })
          );

        navigate('/');
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
      <div className="hero bg-transparent mb-28">
        <div className="hero-content">
          <div className="card w-[370px] shadow-2xl bg-base-100 bg-opacity-20 py-6">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-error">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-error">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Link to your profile pic"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-error">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered text-gray-900"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-error">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered text-gray-900"
                  required
                />
                <label className="mt-4 text-right text-sm">
                  <span>
                    Already a member?{' '}
                    <Link
                      to="/login"
                      className="text-secondary text-base font-bold hover:text-primary"
                    >
                      Login
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary text-base">
                  Register
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

export default Register;
