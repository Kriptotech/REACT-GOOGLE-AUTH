# REACT-GOOGLE-AUTH

 ## For authentication to work you need to add the following javascript code at index.html -->

    <script
      src="https://accounts.google.com/gsi/client"
      async
      defer
    ></script>
    
## JWT DECODE -->
   
  as reactjs cannot interpret the jwt that google returns we need to install jwt_decode
  
  
  ## LOGIN BUTTON -->
  
  google has an id called signInDiv that contains the login button but you can customize yours and pass the id to the renderButton function
  
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    )
  
  
  <img height="500" width="500" src="https://miro.medium.com/max/1400/1*7DurQGFQKETmNHC1QH1EnQ.png" alt="google auth background" />
