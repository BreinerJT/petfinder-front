import { useContext } from 'react'

import { UiContext } from '../context/ui'
import { RegisterModal } from '../components/auth'
import { InputWithLabel } from '../components/ui'

export const IndexPage = () => {
  const { openRegisterModal } = useContext(UiContext)

  return (
		<div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center min-h-screen bg-gradient-to-br from-red-300 via-pink-400 to-red-300'>
			<div className='text-center'>
				<h2 className='text-4xl font-semibold'>Encuentra en</h2>
				<h1 className='text-6xl font-bold'>PETFINDER</h1>
				<h2 className='text-4xl font-semibold'>tu proximo mejor amigo</h2>
			</div>
			<form className='px-24'>
				<div className='mb-6'>
					<InputWithLabel
						autoFocus
						placeholder='unknown@google.com'
						type='email'
					>
						Correo electronico
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel
						placeholder='Ingrese su contraseña...'
						type='password'
					>
						Contraseña
					</InputWithLabel>
				</div>
				<div className='flex items-start mb-6'>
					<div className='h-5'>
					<label
						className='flex gap-2 items-center ml-2 text-sm font-medium text-gray-900 select-none'
					>
						<input
							className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300'
							type='checkbox'
						/>
						Recuerdame
					</label>
					</div>
				</div>
				<div className='grid gap-4 mx-auto w-4/5'>
					<button
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						type='submit'
					>
						Iniciar sesion
					</button>
					<button
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						onClick={ openRegisterModal }
						type='button'
					>
						Crear cuenta
					</button>
				</div>
			</form>
			<RegisterModal />
		</div>
  )
}
