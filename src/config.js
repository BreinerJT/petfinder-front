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
  name: yup
    .string()
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
  quality1: yup
    .string()
    .matches(/^\b[a-zA-Z0-9_]+\b$/)
    .required('Es necesario ingresar informacion.'),
  quality2: yup
    .string()
    .matches(/^\b[a-zA-Z0-9_]+\b$/)
    .required('Es necesario ingresar informacion.'),
  quality3: yup
    .string()
    .matches(/^\b[a-zA-Z0-9_]+\b$/)
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

export const petModalOptions = [
  { value: '', text: '--Seleccione una edad--', disabled: true },
  { value: 'No sabe su edad', text: 'No sabe su edad' },
  { value: 'Entre 2 y 6 meses', text: 'Entre 2 y 6 meses' },
  { value: 'Entre 6 y 12 meses', text: 'Entre 6 y 12 meses' },
  { value: 'Mayor de un año', text: 'Mayor de un año' }
]
