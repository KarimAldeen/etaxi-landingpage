import axios from 'axios'
import { BaseURL } from '../config'
function useAxios() {
  return (
    axios.create({
        baseURL:BaseURL  ,
        headers:{
          Authorization :"Bearer 32|QLbjrAc7ODtD77EPMaEF0lTPvLbPEywSRd3K1Dx165f14d6b"
        }
    })
  )
}

export default useAxios