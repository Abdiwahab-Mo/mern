import './NetflixMain.css'
import { NetflixRegister } from './NetflixRegister'
export function NetflixMain(){
     return(
        <div className="main-center">
     <div className="text-white text-center">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <div className="mt-4"> 
        < NetflixRegister />
        
        
        </div>
     </div>

     </div>
     )
}