const LogOut = () => {

    const handleLogout = () => {
        localStorage.removeItem("email")
        window.location.reload()
    }
    return (
        <div>
            <button className="icons" onClick={handleLogout}><i class='bx bx-log-in'></i></button>
        </div>
    )
}

export default LogOut;
