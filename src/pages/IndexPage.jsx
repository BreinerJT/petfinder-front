import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { UiContext } from '../context/ui'
import { AuthContext } from '../context/auth'
import { RegisterModal } from '../components/modals'
import { Input, Loader } from '../components/ui'
import { loginSchema } from '../config'

export const IndexPage = () => {
  const { openRegisterModal, setDarkTheme, setLightTheme } = useContext(UiContext)
  const { auth, login } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async ({ email, password, rememberMe }) => {
    setIsLoading(true)
    rememberMe
      ? localStorage.setItem('email', email)
      :	localStorage.removeItem('email')

    const resp = await login({ email, password })

    if (!resp) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const email = localStorage.getItem('email')

    if (email) {
      setValue('email', email)
      setValue('rememberMe', true)
    }
  }, [])

  return (
		<div className='relative'>
			<div className='flex flex-col md:grid md:grid-cols-2 justify-center items-center min-h-screen bg-gradient-to-br from-red-300 via-pink-400 to-red-300 dark:from-cyan-300 dark:via-blue-700 dark:to-cyan-300 transition-colors duration-300'>
				<div className='text-center grid items-center justify-center gap-2'>
					<div className='flex justify-center mx-auto w-40 h-40'>
						<img src="./logo.png" alt="Logo." />
					</div>
					<div>
						<h2 className='text-white text-4xl font-semibold'>Encuentra en</h2>
						<h1 className='text-white text-6xl font-bold'>PETFINDER</h1>
						<h2 className='text-white text-4xl font-semibold'>tu proximo mejor amigo</h2>
					</div>
				</div>
				<form className='px-24' noValidate onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-6'>
						<Input
							autoFocus
							border={ errors.email?.message }
							label='Correo electronico'
							placeholder='unknown@google.com'
							type='email'
							{...register('email') }
						/>
					</div>
					<div className='mb-6'>
						<Input
							border={ errors.password?.message }
							label='Contraseña'
							placeholder='Ingrese su contraseña...'
							type='password'
							{...register('password')}
						/>
						<p className='text-black font-bold text-sm pt-2'>{ auth.error?.login }</p>
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
							{
								isLoading
								  ? <Loader small white />
								  : 'Iniciar sesion'
							}
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
			<div className='absolute right-8 top-8 flex gap-4 [&>button:hover]:scale-110'>
				<button
					aria-label='set light theme'
					onClick={ setLightTheme }
					className='w-8 h-8 bg-pink-400 rounded-full border-2 border-white'
				></button>
				<button
					aria-label='set dark theme'
					onClick={ setDarkTheme }
					className='w-8 h-8 bg-blue-700 rounded-full border-2 border-white'
				></button>
			</div>
		</div>
  )
}
