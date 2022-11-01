import { useContext } from 'react'
import Modal from 'react-modal'

import { UiContext } from '../../context/ui'
import { InputWithLabel } from '../ui'

Modal.setAppElement('#root')
export const PetModal = () => {
  const { isPetModalOpen, closePetModal } = useContext(UiContext)

  const onSubmit = (event) => {
    event.preventDefault()
    closePetModal()
  }

  return (
		<Modal
			className='modal'
			closeTimeoutMS={300}
			contentLabel='Modal del registro.'
			isOpen={ isPetModalOpen }
			onRequestClose={ closePetModal }
			overlayClassName='modal-fondo'
		>
			<form onSubmit={onSubmit} className='grid'>
				<div className='mb-6'>
					<InputWithLabel
            autoFocus
            placeholder='Miscifu Garras Afiladas'
          >
						Nombre
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel placeholder='miscifu@google.com'>
						Edad
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<InputWithLabel placeholder='Ingrese su ciudad...'>
						Ciudad
					</InputWithLabel>
				</div>
				<div className='mb-6'>
					<label className='grid gap-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
						Cuentanos mas sobre el peludo
						<textarea className='w-full resize-none' cols="30" autoCapitalize />
					</label>
				</div>
				<div className='mb-6'>
					<label className='grid gap-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
						Tienes algunas fotos? (.png, .jpeg)
						<input type="file" accept="image/png, image/jpeg" />
					</label>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Agregar peludo
				</button>
			</form>
		</Modal>
  )
}
