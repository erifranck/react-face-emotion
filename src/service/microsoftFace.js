import axios from 'axios'

const baseUrl = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0'
export const detectFace = (img, apiKey) =>
  axios
  .post(baseUrl + '/detect', {
    url: img
  }, {
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "application/json"
    }
  })
