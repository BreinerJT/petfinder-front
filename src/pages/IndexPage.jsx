import { useContext } from 'react'
import { InputWithLabel } from '../components/InputWithLabel.jsx'
import { RegisterModal } from '../components/RegisterModal.jsx'
import { UiContext } from '../context/ui/uiContext.jsx'

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
						type='email' 
						id='email'
						placeholder='miscifu@google.com' 
						autoFocus
					>
						Correo electronico
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel
						type='password' id='password'
					>
						Contraseña
					</InputWithLabel>
				</div>
				<div className='flex items-start mb-6'>
					<div className='flex items-center h-5'>
						<input
							id='remember'
							type='checkbox'
							className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
						/>
					</div>
					<label
						htmlFor='remember'
						className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none'
					>
						Recuerdame
					</label>
				</div>
				<div className='grid gap-4 mx-auto w-4/5'>
					<button
						type='submit'
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Iniciar sesion
					</button>
					<button
						type='button'
						onClick={ openRegisterModal }
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Crear cuenta
					</button>
				</div>
			</form>
			<RegisterModal />
		</div>
	)
}
