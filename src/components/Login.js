export function LogIn(){
    return(
        <div className="container-fluid bgdarg text-white">
            <h1>Login</h1>
            Name: <input type="text" />
            Password: <input type="password" />
            <button className="btn btn-danger w-100">Login</button>
        </div>
    )
}