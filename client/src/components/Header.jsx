import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";

const Header = () => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch();


  return (
    <>
      {error && ( <div class="alert alert-danger" role="alert">
       {error}
      </div>)}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button className="btn btn-outline-primary" type="submit"
        onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? "Log Out" : "Log In" }
        </button>
      </nav>
    </>
  );
};

export default Header;
