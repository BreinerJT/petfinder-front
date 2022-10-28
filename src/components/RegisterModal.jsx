import { useContext } from 'react'
import Modal from 'react-modal'
import { UiContext } from '../context/ui/uiContext'
import { InputWithLabel } from './InputWithLabel'

Modal.setAppElement('#root')
export const RegisterModal = () => {
	const { isRegisterModalOpen, closeRegisterModal } = useContext(UiContext)

	const onSubmit = (event) => {
		event.preventDefault()
		closeRegisterModal()
	}

	return (
		<Modal
			className='modal'
			closeTimeoutMS={300}
			contentLabel='Modal del registro.'
			isOpen={ isRegisterModalOpen }
			onRequestClose={ closeRegisterModal }
			overlayClassName='modal-fondo'
		>
			<form onSubmit={onSubmit} className='grid'>
				<div className='mb-6'>
					<InputWithLabel 
            autoFocus
            placeholder='Miscifu Garras Afiladas'
          >
						Nombre y apellido(s)
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel placeholder='Ingrese su ciudad...'>
						Ciudad
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel type='email' placeholder='miscifu@google.com'>
						Correo electronico
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel type='password' placeholder='VivaElWhiskas123'>
						Contraseña
					</InputWithLabel>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Crear cuenta
				</button>
			</form>
		</Modal>
	)
}
