import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { UiContext } from '../../context/ui'
import { Input } from '../ui'
import { registerSchema } from '../../config'

Modal.setAppElement('#root')
export const RegisterModal = () => {
  const { isRegisterModalOpen, closeRegisterModal } = useContext(UiContext)
  const [isShowingPassword, setisShowingPassword] = useState(false)
  // const { registerSchema } = useSchema()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
		<Modal
			className='modal'
			closeTimeoutMS={300}
			contentLabel='Modal del registro.'
			isOpen={isRegisterModalOpen}
			onRequestClose={closeRegisterModal}
			overlayClassName='modal-fondo'
		>
			<form className='grid' noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-6'>
					<Input
						autoFocus
						border={ errors.fullName?.message }
						label='Nombre y apellido(s)'
						placeholder='Tu nombre...'
						{...register('fullName')}
					/>
				</div>
				<div className='mb-6'>
					<Input
						border={ errors.city?.message }
						label='Ciudad'
						placeholder='Ingrese su ciudad...'
						{...register('city')}
					/>
				</div>
				<div className='mb-6'>
					<Input
						border={ errors.email?.message }
						label='Correo electronico'
						placeholder='unknown@google.com'
						type='email'
						{...register('email')}
					/>
				</div>
				<div className='mb-6'>
					<div className='relative'>
						<Input
							border={ errors.password?.message }
							label='Contraseña'
							placeholder='Ingrese su contraseña...'
							type={isShowingPassword ? 'text' : 'password'}
							{...register('password')}
						/>
						<button
							className='absolute right-6 bottom-2 text-black'
							onClick={() => setisShowingPassword(!isShowingPassword)}
							type='button'
						>
							{
								isShowingPassword
								  ?	<svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'></path><line x1='1' y1='1' x2='23' y2='23'></line></svg>
								  :	<svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path><circle cx='12' cy='12' r='3'></circle></svg>
							}
						</button>
					</div>
				</div>
				<button
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					type='submit'
				>
					Crear cuenta
				</button>
			</form>
		</Modal>
  )
}
