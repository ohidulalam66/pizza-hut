import { useContext } from 'react'
import { AuthContext } from '../Shared/Context/AuthProvider/AuthProvider'

const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
