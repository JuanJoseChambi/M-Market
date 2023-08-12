import { delId } from "../../redux/slices/userAuth"
import { useDispatch } from "react-redux"

const LogOut = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem("email")
        window.location.reload()
        dispatch(delId())
    }
    return (
        <div>
            <button className="icons" onClick={handleLogout}><i className='bx bx-log-in'></i></button>
        </div>
    )
}

export default LogOut;
