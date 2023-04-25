import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../features/Mode";


const ModeButton = () => {

    const dispatch = useDispatch();

    const mode = useSelector((state) => state.mode.value);

    return (
        <>
            <button onClick={() => {mode==="dark"?dispatch(changeMode("light")):dispatch(changeMode("dark"))}}>Switch Mode</button>
        </>
    )
}

export default ModeButton;