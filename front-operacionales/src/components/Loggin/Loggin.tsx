import React from 'react';
import 'styles/Loggin/Loggin.css';

export const Loggin = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card">
                <div className="card-body text-center d-flex flex-column justify-content-center align-items-center h-100">
                    <h2 className="card-title">Iniciar Sesión</h2>
                    <form className="w-100 pt-2 ps-4 pe-4 ">
                        <div className="form-floating mb-4 mt-4">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                            <label htmlFor="floatingInput">Correo</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <button className="btn btn-dark w-100 mt-5" type="submit">
                            Iniciar Sesión
                        </button>
                    </form>
                    <a href="#" className=" mt-4 text-decoration-none">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
        </div>
    )
}
