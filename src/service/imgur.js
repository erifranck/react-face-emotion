import axios from 'axios'

export const uploadImage = (img, clientId) => {
  const formData = new FormData();
  formData.append('image', img.split("data:image/png;base64,")[1])
  return axios
    .post('https://api.imgur.com/3/upload', formData, {
      headers: {
        'Authorization': 'Client-ID ' + clientId,
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      }
    })

}
