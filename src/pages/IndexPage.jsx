import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { UiContext } from '../context/ui'
import { RegisterModal } from '../components/auth'
import { Input } from '../components/ui'
import { loginSchema } from '../config'

export const IndexPage = () => {
  const { openRegisterModal, toggleTheme, isDark } = useContext(UiContext)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = ({ email, password, rememberMe }) => {
    console.log({ email, password, rememberMe })
  }

  return (
		<div className='relative'>
			<div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center min-h-screen bg-gradient-to-br from-red-300 via-pink-400 to-red-300 dark:from-cyan-300 dark:via-blue-700 dark:to-cyan-300 transition-colors duration-300'>
				<div className='text-center grid items-center justify-center gap-2'>
					<div className='flex justify-center object-fill'>
						<img className='rounded-full w-40 h-40' src="./logo.png" alt="Logo." />
					</div>
					<div>
						<h2 className='text-4xl font-semibold'>Encuentra en</h2>
						<h1 className='text-6xl font-bold'>PETFINDER</h1>
						<h2 className='text-4xl font-semibold'>tu proximo mejor amigo</h2>
					</div>
				</div>
				<form className='px-24' noValidate onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-6'>
						<Input
							autoFocus
							label='Correo electronico'
							placeholder='unknown@google.com'
							themed
							type='email'
							{...register('email') }
						/>
						<p className='pt-2 text-red-500 font-semibold'>{errors.email?.message}</p>
					</div>
					<div className='mb-6'>
						<Input
							label='Contraseña'
							placeholder='Ingrese su contraseña...'
							themed
							type='password'
							{...register('password')}
						/>
						<p className='pt-2 text-red-500 font-semibold'>{errors.password?.message}</p>
					</div>
					<div className='flex items-start mb-6'>
						<div className='h-5'>
						<label
							className='flex gap-2 items-center ml-2 text-sm font-medium text-gray-900 dark:text-white select-none'
						>
							<input
								className='w-4 h-4 bg-gray-50 rounded border border-gray-300'
								type='checkbox'
								{ ...register('rememberMe') }
							/>
							Recuerdame
						</label>
						</div>
					</div>
					<div className='grid gap-4 mx-auto w-4/5'>
						<button
							className='text-white border border-white bg-inherit font-semibold rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center hover:bg-red-500 hover:bg-opacity-40 dark:hover:bg-blue-600'
							type='submit'
						>
							Iniciar sesion
						</button>
						<button
							className='text-white border border-white bg-inherit font-semibold rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center hover:bg-red-500 hover:bg-opacity-40 dark:hover:bg-blue-600'
							onClick={ openRegisterModal }
							type='button'
						>
							Crear cuenta
						</button>
					</div>
				</form>
				<RegisterModal />
			</div>
			{/* <div className='absolute top-8 right-8'>
			<label htmlFor="red-toggle" className="inline-flex relative items-center mr-5 cursor-pointer">
				<input type="checkbox" value="" id="red-toggle" className="sr-only peer" checked />
				<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red</span>
			</label>
			</div> */}
				<button
					onClick={ toggleTheme }
					className='absolute right-8 top-8 w-8 h-8 bg-inherit rounded-full dark:text-white text-yellow-300'
				>
					{ isDark
					  ? <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
					  : <svg className='w-6 h-6' viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
					}
				</button>
		</div>
  )
}
