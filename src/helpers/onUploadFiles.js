import { fileUpload } from './'

export const onUploadFiles = async (files = []) => {
  const fileUploadPromises = []
  for (const file of files) {
    fileUploadPromises.push(fileUpload(file))
  }

  const photosUrls = await Promise.all(fileUploadPromises)
  return photosUrls
}
