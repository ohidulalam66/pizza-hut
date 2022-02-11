/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import firebaseInitialize from '../Secure/Firebase/firebase.init'

firebaseInitialize()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  // user register filed
  const registerUser = (name, email, Password, navigate) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        setError('')
        const newUser = { email, displayName: name }
        setUser(newUser)
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {})
        navigate('/home')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  // user login filed
  const loginUser = (email, password, location, navigate) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('')
        const destination = '/home'
        navigate(destination)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  // user google sign in filed
  const signInWithGoogle = (location, navigate) => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        const destination = '/home'
        navigate(destination)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  // user logout filed
  const logOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false))
  }

  // observer user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false)
    })
    return () => unSubscribe
  }, [])
  return {
    user,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logOut,
    error,
  }
}

export default useFirebase
