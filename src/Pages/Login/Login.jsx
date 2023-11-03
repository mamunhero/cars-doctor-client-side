import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../../../src/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(form, email, password);
    signIn(email, password)
    .then(result=> {
      console.log(result.user);
      // const loggedInUser = result.user;
      // // console.log(loggedInUser);
      // const user = {email};
     
      // // get access token
      // fetch("http://localhost:5000/jwt", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json"
      //   },
      //   body: JSON.stringify(user)
      // })
      // .then(respoonse=>respoonse.json())
      // .then(data=> {
      //   console.log(data);
      // })
      // axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
      // .then(response=> {
      //   console.log(response.data);
      //   if (response.data.success) {
      //      navigate(location?.state ? location?.state : "/")
      //   }
      // })
    })
    .catch(error=> {
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200 mb-5">
    <div className="hero-content flex-col lg:flex-row">
      <div className="w-1/2 mr-12">
        <img src={loginimg} alt="login" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="my-5 text-center">New to Cars Doctors
          <Link className="text-orange-600 font-bold" to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;
