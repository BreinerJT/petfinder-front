import { useState } from 'react'
import { petApi } from '../../apis'
import { PetContext } from './'

const initialState = {
  allPets: [],
  myPets: [],
  msg: null
}

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState(initialState)
  const getOwnPets = async () => {
    try {
      const { data } = await petApi.get('/mine')
      setPets({
        ...pets,
        myPets: data.pets
      })
      return true
    } catch (error) {
      console.log(error)
    }
  }

  const getAllPets = async () => {
    try {
      const { data } = await petApi.get('/')
      setPets({
        ...pets,
        allPets: data.pets
      })
      return true
    } catch (error) {
      console.log(error)
    }
  }

  const addNewPet = async (pet) => {
    const { age, city, description, name, photos } = pet
    try {
      const { data } = await petApi.post('/new', { age, city, description, name, photos })
      setPets({
        ...pets,
        myPets: [...pets.myPets, data.pet]
      })
      return true
    } catch (error) {
      console.log(error)
    }
  }

  const cleanPets = () => {
    setPets(initialState)
  }

  return (
    <PetContext.Provider value={{
      //  Propiedades
      pets,
      ...pets,

      //  Metodos
      addNewPet,
      cleanPets,
      getAllPets,
      getOwnPets
    }}>
      { children }
    </PetContext.Provider>
  )
}
