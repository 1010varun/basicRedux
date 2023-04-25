import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

const Login = () => {

    const dispatch = useDispatch();

    return (
      <>
        <button
          onClick={() => {
            dispatch(
              login({
                name: "varun-Agarwal",
                age: 20,
                email: "varun@gmail.com",
              })
            );
          }}
        >
          Login
        </button>

        <button onClick={() => {dispatch(logout())}}>Logout</button>
      </>
    );
}

export default Login;