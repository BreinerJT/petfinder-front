import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Inserte un correo electronico valido.')
    .required('Es necesario ingresar un correo electronico.'),
  password: yup
    .string()
    .required('Es necesario ingresar una contraseña.')
    .min(6, 'La contraseña debe estar entre 6 y 18 caracteres.')
    .max(18, 'La contraseña debe estar entre 6 y 18 caracteres.')
}).required()

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .matches(/^([^0-9]*)$/i, 'El nombre no es valido.')
    .required('Es necesario ingresar un nombre.'),
  city: yup
    .string()
    .required('Es necesario ingresar una ciudad.'),
  email: yup
    .string()
    .email('Inserte un correo electronico valido.')
    .required('Es necesario ingresar un correo electronico.'),
  password: yup
    .string()
    .required('Es necesario ingresar una contraseña.')
    .min(6, 'La contraseña debe estar entre 6 y 18 caracteres.')
    .max(18, 'La contraseña debe estar entre 6 y 18 caracteres.')
}).required()

export const petSchema = yup.object({
  name: yup
    .string()
    .required('Es necesario un nombre.'),
  age: yup
    .string()
    .required('Es necesario una edad.'),
  city: yup
    .string()
    .matches(/^([^0-9]*)$/i, 'La ciudad no es valida.')
    .required('Es necesario ingresar una ciudad.'),
  about: yup
    .string()
    .required('Es necesario ingresar informacion.'),
  photos: yup
    .mixed()
    .test('required', 'Es necesario agregar al menos una foto.', file => {
      return file.length > 0
    })
    .test('fileLength', 'Solo puedes agregar maximo 4 fotos.', file => {
      return file && file.length <= 4
    })
}).required()
