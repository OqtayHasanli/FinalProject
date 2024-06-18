import React from 'react'
import "./underchoose.scss"
import photo1 from "./images/class-1.jpg"
import photo2 from "./images/class-2.jpg"
import photo3 from "./images/class-3.jpg"
import photo4 from "./images/class-4.jpg"

const Underchoose = () => {
  return (
    <div className='mainchose '>
    <div className='groupclasses groupchose'>
        <img className='image1' src={photo1} alt="" />
        <h2>CROSSFIT LEVEL 1</h2>
        <p>Sufferers around the globe will be happy to hear that there are sleep apnea remedies.</p>
        <button>READ MORE</button>
    </div>
    <div className='groupclasses'>
        <img className='image2' src={photo2} alt="" />
        <h2>BOOTCAMP</h2>
        <p>The oil, also called linseed oil, has many industrial uses – it is an important ingredient</p>
        <button>READ MORE</button>
    </div>
    <div className='groupclasses'>
        <img className='image4' src={photo3} alt="" />
        <h2>ENERGY BLAST</h2>
        <p>It is a very common occurrence like cold or fever depending upon your lifestyle.</p>
        <button>READ MORE</button>
    </div>
    <div className='groupclasses'>
        <img className='image4' src={photo4} alt="" />
        <h2>CLASSIC BODY BALANCE</h2>
        <p>The procedure is usually a preferred alternative to photorefractive keratectomy,</p>
        <button>READ MORE</button>
    </div>

    
</div>
  )
}

export default Underchoose