import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import '../../App.css'

function Logout() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  function cancel() {
    setOpen(false);
    setTimeout(() => navigate(-1), 300);
  }

  function logout() {
    setOpen(false);
    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    }, 300);
  }

  return (
    <div>
      <Dialog open={open} onClose={cancel} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-3xl !bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="!bg-white !px-8 !py-10 !sm:p-10">
                <div className="flex flex-col items-center text-center">
                  <div className="mx-auto flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-red-50 mb-6">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-10 w-10 text-red-600" />
                  </div>
                  <DialogTitle as="h3" className="text-2xl font-bold leading-6 !text-gray-900 !mt-5">
                    Cerrar sesión
                  </DialogTitle>
                  <div className="mt-4">
                    <p className="text-base !text-gray-500 max-w-sm mx-auto text-center leading-relaxed">
                      ¿Estás seguro de que quieres cerrar sesión? Tendrás que ingresar tus datos nuevamente para entrar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-10 py-8 flex gap-4 w-full">
                <button
                  type="button"
                  onClick={cancel}
                  className="flex-1 justify-center rounded-full !bg-white px-5 py-3 text-sm font-semibold !text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:!bg-gray-50 transition-colors !ml-10"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="flex-1 justify-center rounded-full !bg-[#DC2626] px-5 py-3 text-sm font-semibold !text-white shadow-sm hover:!bg-red-700 transition-colors !mr-10"
                >
                  Cerrar sesión
                </button>
              </div>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Logout;