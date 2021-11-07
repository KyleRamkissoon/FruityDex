import { Storage } from 'aws-amplify'

class S3Controller {
  constructor() {
    this.bucketName = 'fruitacl0743275ed28c4cb19d8043d962594299231546-dev'
    this.directories = {
      fruit_images: 'fruit_images/',
      user_avatars: 'user_avatars/',
    }
  }

  // backend stuff
  storeImage(filename, fileList) {
    Storage.put(filename, fileList[0])
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // custom controller logic
  uploadFruitImage = (fileList) => {
    if (fileList.length > 0) {
      // file exists
      this.storeImage(this.directories.fruit_images + fileList[0].name, fileList)
    }
  }
  uploadUserAvatar = (fileList) => {
    if (fileList.length > 0) {
      // file exists
      this.storeImage(this.directories.user_avatars + fileList[0].name, fileList)
    }
  }
}

export default S3Controller
