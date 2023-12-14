// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <div className="App">
    <Details/>   
    </div>

  );
}

function Details() {
  const pack =  
    {
    free: "FREE",
    plus: "PLUS",
    pro: "PRO",
    };
  const price = 
    {
     pricef: "$0/month",
     pricep: "$9/month",
     pricero: "$49/month",
    }
  const details = 
    
    {
     user: "Single User",
     storage: "50GB Storage",
     publics: "Unlimited Public Projects",
     community: "Community Access",
     privates: "Unlimited Private Projects",
     support: "Dedicated Phone Support",
     subdomain: "Free Subdomain",
     reports: "Monthly Status Reports",
    }
  
return (
    
  <div className="container">
    {/* card-1 */}
    <div className="cards">
      <h6 className="card-title">{pack.free}</h6>
      <h3 className="price">{price.pricef}</h3>
      <p className="breakline"></p>
      <div className='user'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.user}</p>
        </div>
      <div className='storage'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.storage}</p>
        </div>
      <div className='publics'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.publics}</p>
        </div>
        <div className='community'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.community}</p>
        </div>
      <div className='privates1'>
        <span className="material-symbols-outlined">close</span>
        <p>{details.privates}</p>
        </div>
      <div className='support1'>
        <span className="material-symbols-outlined">close</span>
        <p>{details.support}</p>
        </div>
      <div className='subdomain1'>
        <span className="material-symbols-outlined">close</span>
        <p>{details.subdomain}</p>
        </div>
      <div className='reports1'>
        <span className="material-symbols-outlined">close</span>
        <p>{details.reports}</p>
        </div>
        <button type="button" className="btn1">BUTTON</button>
    </div>

 {/* card-2 */}
    <div className="cards">
      <h6 className="card-title">{pack.plus}</h6>
      <h3 className="price">{price.pricep}</h3>
      <p className="breakline"></p>
      <div className='user'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.user}</p>
        </div>
      <div className='storage'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.storage}</p>
        </div>
      <div className='publics'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.publics}</p>
        </div>
        <div className='community'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.community}</p>
        </div>
      <div className='privates'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.privates}</p>
        </div>
      <div className='support'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.support}</p>
        </div>
      <div className='subdomain'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.subdomain}</p>
        </div>
      <div className='reports2'>
        <span className="material-symbols-outlined">close</span>
        <p>{details.reports}</p>
        </div>
        <button type="button" className="btn2">BUTTON</button>
    </div>

{/* card-3 */}
    <div className="cards">
      <h6 className="card-title">{pack.pro}</h6>
      <h3 className="price">{price.pricero}</h3>
      <p className="breakline"></p>
      <div className='user'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.user}</p>
        </div>
      <div className='storage'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.storage}</p>
        </div>
      <div className='publics'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.publics}</p>
        </div>
        <div className='community'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.community}</p>
        </div>
      <div className='privates'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.privates}</p>
        </div>
      <div className='support'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.support}</p>
        </div>
      <div className='subdomain'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.subdomain}</p>
        </div>
      <div className='reports'>
        <span className="material-symbols-outlined">check</span>
        <p>{details.reports}</p>
        </div>
        <button type="button" className="btn3">BUTTON</button>
    </div>
  </div>
)
}

export default App
