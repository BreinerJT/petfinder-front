import { useContext, useState } from 'react'
import Modal from 'react-modal'

import { UiContext } from '../../context/ui'
import { InputWithLabel } from '../ui'

Modal.setAppElement('#root')
export const RegisterModal = () => {
  const { isRegisterModalOpen, closeRegisterModal } = useContext(UiContext)
  const [isShowingPassword, setisShowingPassword] = useState(false)

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
            placeholder='Tu nombre...'
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
					<InputWithLabel type='email' placeholder='unknown@google.com'>
						Correo electronico
					</InputWithLabel>
				</div>
				<div className='mb-6 relative'>
					<InputWithLabel type={ isShowingPassword ? 'text' : 'password' } placeholder='Ingrese su contraseña...'>
						Contraseña
						<button onClick={ () => setisShowingPassword(!isShowingPassword) } type='button' className='absolute right-6 bottom-2'>OJO</button>
					</InputWithLabel>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Crear cuenta
				</button>
			</form>
		</Modal>
  )
}
