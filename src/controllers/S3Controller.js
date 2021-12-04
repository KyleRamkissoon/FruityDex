import { Storage } from 'aws-amplify'
import { randomBytes } from 'crypto'

class S3Controller {
  constructor() {
    this.bucketName = 'fruitacl0743275ed28c4cb19d8043d962594299231546-dev'
    this.directories = {
      fruit_images: 'fruit_images/',
      user_avatars: 'user_avatars/',
    }
  }

  // util stuff

  /*
    name = banana
    return bananXXXXXXXXXXXXXXXXXXXX
   */
  getSaltedImageName(name) {
    return name.substring(0, 5) + randomBytes(20).toString('hex')
  }

  // backend stuff
  /*
    store the image but return the promise so we can use the response
    returns {key: "imagedirector/imagename.png"}
   */
  async putStoreImage(filename, fileList) {
    return await Storage.put(filename, fileList[0]) // todo does this return the promise?
  }

  /*
    get the image object from the s3 bucket
    returns storage object?
   */
  async getStorageItem(filename) {
    return await Storage.list(filename) // for listing ALL files without prefix, pass '' instead
  }

  // custom controller logic
  async putUploadFruitImage(fileList) {
    if (fileList.length > 0) {
      // file exists
      return await this.putStoreImage(
        this.directories.fruit_images + this.getSaltedImageName(fileList[0].name),
        fileList,
      )
    }
  }
  async getAllFruitImages() {
    return await Storage.list(this.directories.fruit_images) // for listing ALL files without prefix, pass '' instead
  }
}

export default S3Controller
