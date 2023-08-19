
const LogOut = () => {

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("userId")
        localStorage.removeItem("adminId")
        localStorage.removeItem("gmail")
        window.location.reload()
    }
    return (
        <div>
            <button className="icons" onClick={handleLogout}><i className='bx bx-log-in'></i></button>
        </div>
    )
}

export default LogOut;
