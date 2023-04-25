import { useSelector }from "react-redux"



const Profile = () => {

  const user = useSelector((state) => state.user.value);
  const mode = useSelector((state) => state.mode.value);

  const color = mode === "dark" ? "orange" : "green";
  const backgroundColor = mode === "dark" ? "green" : "orange";

    return (
      <div style={{color, backgroundColor}} >
        <h2>Profile Page</h2>
        <p>Name : { user.name}</p>
        <p>Age : { user.age}</p>
        <p>email : { user.email}</p>
      </div>
    );
}

export default Profile;