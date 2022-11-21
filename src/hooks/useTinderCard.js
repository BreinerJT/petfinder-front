import { useEffect, useContext } from 'react'

import { AuthContext } from '../context/auth'
import { PetContext } from '../context/pet'
import { petApi } from '../apis'

export const useTinderCard = () => {
  const { uid, updateLikes, updateDislikes } = useContext(AuthContext)
  const { pets, setPets } = useContext(PetContext)
  // const [currentIndex, setCurrentIndex] = useState(allPets.length - 1)

  const getAllPets = async () => {
    try {
      const { data } = await petApi.get('/')
      setPets({
        ...pets,
        allPets: data.pets
      })
    } catch (error) {
      console.log(error)
    }
  }

  // const currentIndexRef = useRef(currentIndex)
  // const canGoBack = currentIndex < allPets.length - 1
  // const canSwipe = currentIndex >= 0

  // const childRefs = useMemo(
  //   () =>
  //     Array(allPets.length)
  //       .fill(0)
  //       .map((i) => createRef()),
  //   [allPets]
  // )

  // const updateCurrentIndex = (val) => {
  //   setCurrentIndex(val)
  //   currentIndexRef.current = val
  // }

  const swiped = (direction, pet) => {
    // updateCurrentIndex(index - 1)
    if (direction === 'right') {
      updateLikes(uid, pet)
    } else {
      updateDislikes(uid, pet)
    }
  }

  // const outOfFrame = (name, idx) => {
  //   currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  // }

  // const swipe = async (dir, pet) => {
  //   if (canSwipe && currentIndex < allPets.length) {
  //     await childRefs[currentIndex].current.swipe(dir)
  //   }
  // }

  // const goBack = async () => {
  //   if (!canGoBack) return
  //   const newIndex = currentIndex + 1
  //   updateCurrentIndex(newIndex)
  //   await childRefs[newIndex].current.restoreCard()
  // }

  useEffect(() => {
    getAllPets()
  }, [])

  return {
    getAllPets,
    swiped
  }
}
