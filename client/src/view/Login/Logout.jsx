const LogOut = () => {

    const handleLogout = () => {
        localStorage.removeItem("email")
        window.location.reload()
    }
    return (
        <div>
            <button className="icons" onClick={handleLogout}><i className="bi bi-box-arrow-right"></i></button>
        </div>
    )
}

export default LogOut;
