import { useContext } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2'

import { PetContext } from '../../context/pet'
import { UiContext } from '../../context/ui'
import { Input } from '../ui'
import { onUploadFiles } from '../../helpers'
import { petModalOptions, petSchema } from '../../config'

Modal.setAppElement('#root')
export const PetModal = () => {
  const { isPetModalOpen, closePetModal } = useContext(UiContext)
  const { addNewPet } = useContext(PetContext)
  const { handleSubmit, register, formState: { errors }, clearErrors, reset } = useForm({
    resolver: yupResolver(petSchema)
  })

  const onCloseModal = () => {
    closePetModal()
    clearErrors()
  }

  const onSubmit = async (data) => {
    const photos = await onUploadFiles(data.photos)
    const newPet = {
      age: data.age,
      city: data.city,
      description: [data.quality1, data.quality2, data.quality3],
      name: data.name,
      photos
    }
    const resp = await addNewPet(newPet)
    if (resp) {
      closePetModal()
      reset()
      Swal.fire(`${data.name}`, 'ha sido agregado exitosamente.', 'success')
    }
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return
    onUploadFiles(target.files)
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
						border={ errors.name?.message }
						label='Nombre'
            placeholder='Miscifu Garras Afiladas'
						{ ...register('name') }
          />
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Edad
						<select
							className={`bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errors.age?.message && 'border-red-500'}`}
							{ ...register('age') }
						>
						{
							petModalOptions.map(option => (
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
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Describelo en tres palabras
						<div className='flex gap-2'>
							<Input placeholder='Cariñoso(a)' border={ errors.quality1?.message } { ...register('quality1') } />
							<Input placeholder='Jugueton(a)' border={ errors.quality2?.message } { ...register('quality2') } />
							<Input placeholder='Tierno(a)' border={ errors.quality3?.message } { ...register('quality3') } />
						</div>
					</label>
				</div>
				<div className='mb-2'>
					<label className='grid gap-2 font-medium text-gray-900'>
						Tienes alguna foto?
						<input onChange={ onFileInputChange } type="file" accept="image/png, image/jpeg" { ...register('photos') } />
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
