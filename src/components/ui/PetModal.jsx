import { useContext } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { UiContext } from '../../context/ui'
import { Input } from '../ui'
import { petSchema } from '../../config'

const options = [
  { value: '', text: '--Seleccione una edad--', disabled: true },
  { value: 'No sabe su edad', text: 'No sabe su edad' },
  { value: 'Entre 2 y 6 meses', text: 'Entre 2 y 6 meses' },
  { value: 'Entre 6 y 12 meses', text: 'Entre 6 y 12 meses' },
  { value: 'Mayor de un año', text: 'Mayor de un año' }
]

Modal.setAppElement('#root')
export const PetModal = () => {
  const { isPetModalOpen, closePetModal } = useContext(UiContext)
  const { handleSubmit, register, formState: { errors }, clearErrors } = useForm({
    resolver: yupResolver(petSchema)
  })

  const onCloseModal = () => {
    closePetModal()
    clearErrors()
  }

  const onSubmit = (data) => {
    console.log(data)
    // closePetModal()
  }

  return (
		<Modal
			className='modal'
			closeTimeoutMS={ 300 }
			contentLabel='Modal del registro.'
			isOpen={ isPetModalOpen }
			onRequestClose={ onCloseModal }
			overlayClassName='modal-fondo'
		>
			<form className='grid' noValidate onSubmit={ handleSubmit(onSubmit) }>
				<div className='mb-2'>
					<Input
            autoFocus
						label='Nombre'
            placeholder='Miscifu Garras Afiladas'
						{ ...register('name') }
          />
					<p className='pt-2 text-sm text-red-500 font-semibold'>{errors.name?.message}</p>
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Edad
						<select
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
							{ ...register('age') }
						>
						{
							options.map(option => (
								<option
									key={ option.value }
									value={ option.value }
									disabled={ option.disabled }
								>
									{ option.text }
								</option>
							))
						}
						</select>
					</label>
					{/* <Input
						label='Edad'
						placeholder='miscifu@google.com'
						{ ...register('age') }
					/> */}
					{/* <p className='pt-2 text-sm text-red-500 font-semibold'>{errors.age?.message}</p> */}
				</div>
				<div className='mb-2'>
					<Input label='Ciudad' placeholder='Ingrese su ciudad...' { ...register('city') } />
					<p className='pt-2 text-sm text-red-500 font-semibold'>{errors.city?.message}</p>
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Cuentanos mas sobre el peludo
						<textarea className='p-2.5 w-full resize-none border' cols="30" { ...register('about') } />
						<p className='pt-2 text-sm text-red-500 font-semibold'>{errors.about?.message}</p>
					</label>
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Tienes algunas fotos? (max: 4)
						<input type="file" accept="image/png, image/jpeg" { ...register('photos') } />
						<p className='pt-2 text-sm text-red-500 font-semibold'>{errors.photos?.message}</p>
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
