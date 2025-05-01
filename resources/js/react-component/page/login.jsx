import React from "react";
import { FaAngleLeft } from "react-icons/fa6";


/**
 *
 * @returns {JSX.Element}
 * @description Component that renders the login background image
 */
function ImageLogin() {
    return (
        <>
            <img
                alt="Background de la empresa"
                src="./img/background_login.jpg"
                className="size-full object-cover object-center"
            />
        </>
    );
}

/**
 * @returns {JSX.Element}
 * @description Component that renderess the login form
 */
function FormLogin() {
    return (
        <>
            <div className="w-full h-3/8 md:h-2/8 grid content-around mb-2">
                <img
                    alt="Logo de la empresa"
                    src="./img/23788731_6862535.svg"
                    className="size-40 mx-auto mb-4"
                />
                <h2 className="text-center font-bold text-xl text-gray-700">
                    Inicia sesión
                </h2>
            </div>

            <div className="w-full h-5/8 md:h-6/8 flex justify-center">
                <form
                    action="#"
                    method="POST"
                    className="space-y-6 p-6 w-full max-w-sm"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-500"
                        >
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-500"
                        >
                            Contraseña
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="inline-flex items-center space-x-2" >
                        <input
                            type="checkbox"
                            name="sessionOpen"
                            id="sessionOpen"
                            className="w-4 h-4 flex items-center justify-center border-2 rounded-sm focus:ring-blue-600"
                        />
                        <span
                            className="ml-1 text-xs text-gray-500 p-1">
                                Mantener la sesión abierta
                        </span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

/**
 * @returns {JSX.Element}
 * @description Component that renders the login page
 */
function Login() {
    return (
        <>
            {/*
          This example requires updating your template:

          ```
          <html className="h-full bg-white">
          <body className="h-full">
          ```
        */}
            <div
                className="flex flex-row h-screen bg-white"
            >
                <div
                    className="hidden lg:flex xl:w-2/3 lg:w-3/5 md:w-1/2 h-screen"
                >
                    <ImageLogin />
                </div>
                <div
                    className="xl:w-1/3 lg:w-2/5 w-full h-full md:@flex md:@flex-col md:@justify-center md:@items-center"
                >

                    <div
                        className="h-15 lg:h-6  grid contents-center"
                    >
                        <a
                            href="#"
                            className="m-3 inline-flex items-center text-blue-500 text-bold hover:text-blue-700"
                        >
                            <FaAngleLeft/>Atrás
                        </a>
                    </div>

                    <div className="m-2">
                        <FormLogin />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login;
