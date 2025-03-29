import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { IconEyeFilled, IconEyeOff, IconArrowLeft } from "@tabler/icons-react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-white dark:bg-gray-900 px-4">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <IconArrowLeft className="size-5 mr-2" />
              Regresar al menú principal
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-800">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white/90 mb-2 text-center">
                Log in
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Ingresa tu correo y contraseña para iniciar sesión!
              </p>
            </div>
            <form className="mt-4">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Correo <span className="text-error-500">*</span>
                  </label>
                  <Input placeholder="info@gmail.com" className="w-full" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">
                    Contraseña <span className="text-error-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      className="w-full"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <IconEyeFilled className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <IconEyeOff
                          stroke={2}
                          className="stroke-gray-500 dark:stroke-gray-400 size-5"
                        />
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                      Recordar
                    </span>
                  </div>
                  <Link
                    to="/"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <div className="pt-2">
                  <Button className="w-full" size="md">
                    Iniciar Sesión
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
