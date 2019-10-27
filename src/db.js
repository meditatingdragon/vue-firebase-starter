import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'firebase-project-id'
})

export const db = firebase.firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
