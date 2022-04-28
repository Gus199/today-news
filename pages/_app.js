import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
 
  return  (
    <AuthContextProvider>
    <div  className='main'>
<Component {...pageProps} />
 </div>
 </AuthContextProvider>
  ) 
  
  
  
  
}

export default MyApp
