 import './NetflixIndex.css'
 import { NetflixHeader } from './NetflixHeader';
 import { NetflixMain } from './NetflixMain';
 
 export function NetflixIndex()
 {
    return(
        <div className="background-image">
        <div className="background-shade ">
            <NetflixHeader />
            <NetflixMain />
            

        </div>
          
        </div>
    )
 }