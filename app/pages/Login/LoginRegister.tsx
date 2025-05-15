import React, { useEffect } from "react";
import "./LoginRegister.css";

export function LoginRegister() {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      const handleSignUp = () => container.classList.add("right-panel-active");
      const handleSignIn = () => container.classList.remove("right-panel-active");

      signUpButton.addEventListener("click", handleSignUp);
      signInButton.addEventListener("click", handleSignIn);

      // Limpieza al desmontar el componente
      return () => {
        signUpButton.removeEventListener("click", handleSignUp);
        signInButton.removeEventListener("click", handleSignIn);
      };
    }
  }, []);

  return (
    <>
     
      <div className="container" id="container">
      <h2>Iniciar sesión | Registrarse</h2>
        {/* Formulario de registro */}
        <div className="form-container sign-up-container">
          <form action="#" method="post">
            <h1>Crear una cuenta</h1>
           
            <span>o utiliza tu correo electrónico para registrarte</span>
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo electrónico" required />
            <input type="password" name="password" placeholder="Contraseña" required />
            <input type="password" name="confirm_password" placeholder="Confirmar contraseña" required />
            <button type="submit">Registrarse</button>
          </form>
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="form-container sign-in-container">
          <form action="#" method="post">
            <h1>Iniciar sesión</h1>
            <span>o usa tu cuenta</span>
            <input type="text" name="name" placeholder="Correo electrónico" required />
            <input type="password" name="password" placeholder="Contraseña" required />
            <a href="./views/RecuperarContraseña.php">¿Olvidaste tu contraseña?</a>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>

        {/* Panel de alternancia */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
              <button className="ghost" id="signIn">Iniciar sesión</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>¡Bienvenido al Registro!</h1>
              <p>Introduce tus datos personales y comienza el viaje con nosotros</p>
              <button className="ghost" id="signUp">Registrarse</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          <a target="_blank" href="#">Automuelles Diesel</a>
        </p>
      </footer>
    </>
  );
}
