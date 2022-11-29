import * as React from 'react'
import './signin.css'
import { useEffect } from 'react'
import { useNavigation } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

export default function Signin() {
  const navigation = useNavigation()

  useEffect(() => {
    // here begins the initialization of your authentication through the id provided by google cloud
    google.accounts.id.initialize({
      client_id:
        '831337840944-laodrj2i0jgkhmo5s8hld9ai1avrfji6.apps.googleusercontent.com',
      callback: handleCallbackResponse
    })

    // google has an id called signInDiv that contains the login button
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    )
  }, [])

  async function handleCallbackResponse(response) {
    // as reactjs cannot interpret the jwt that google returns we need to install jwt_decode
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    if (userObject.email_verified == true) {
      navigation('/anywhere')
    } else {
      alert('Email nao verificado pela google')
    }
  }

  return (
    <div className="container">
      <div>
        <span
          style={{
            marginBottom: 40,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          SIGNIN WITH GOOGLE
        </span>

        <div id="signInDiv"></div>
      </div>
    </div>
  )
}
