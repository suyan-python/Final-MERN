import { useState } from "react";
import axios from "axios";
import manImg from "../../assets/images/manSitting.svg";
import { PostRequest } from "../../plugins/https";
import baseAxios from "../../plugins/axios";
import { setTokenToLocalStorage } from "../../utils/localstorage.helper";
import { setAuthorizationHeader } from "../../utils/auth.helper";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/modules/auth/action";
export const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await PostRequest("auth/login", {
        username: user.username,
        password: user.password,
      });

      setTokenToLocalStorage(res.data.token);
      setAuthorizationHeader(res.data.token);

      // window.location.reload();

      dispatch(setToken(res.data.token));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="auth-layout">
      <div className="image-area">
        <img src={manImg} alt="" />
      </div>
      <div className="form-area">
        <form onSubmit={submitForm}>
          <div className="auth-title">Login</div>

          <div className="form-box">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={inputHandler}
              placeholder="Enter Title"
            />
          </div>
          <div className="form-box">
            <label>Password</label>
            <input
              type="text"
              name="password"
              onChange={inputHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="forget-password">Forget Password</div>
          <div className="btn-area">
            <button type="submit" className="btn primary">
              Login
            </button>
          </div>

          <div className="sign-up-link">
            Don't have an account? Please sign up.
          </div>
        </form>
      </div>
    </section>
  );
};
