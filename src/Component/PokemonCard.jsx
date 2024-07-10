import React from 'react'
import img001 from '../img/001.png'
import img002 from '../img/002.png'
import img003 from '../img/003.png'
import img004 from '../img/004.png'
import img005 from '../img/005.png'
import img006 from '../img/006.png'
import img007 from '../img/007.png'
import img008 from '../img/008.png'
import img009 from '../img/009.png'
import img010 from '../img/010.png'
import img011 from '../img/011.png'
import img012 from '../img/012.png'


function PokemonCard() {
  return (
    <div className='container'>
      <div className="item">
        <div className="box_img">
          <img src={img001} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0001</span>
          <h2 className='name'>Bulbasaur</h2>
          <div className="system">
            <span className="systemName Grass">
              Grass
            </span>
            <span className="systemName Poison">
              Poison
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img002} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0002</span>
          <h2 className='name'>Ivysaur</h2>
          <div className="system">
            <span className="systemName Grass">
              Grass
            </span>
            <span className="systemName Poison">
              Poison
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img003} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0003</span>
          <h2 className='name'>Venusaur</h2>
          <div className="system">
            <span className="systemName Grass">
              Grass
            </span>
            <span className="systemName Poison">
              Poison
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img004} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0004</span>
          <h2 className='name'>Charmander</h2>
          <div className="system">
            <span className="systemName Fire">
              Fire
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img005} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0005</span>
          <h2 className='name'>Charmeleon</h2>
          <div className="system">
            <span className="systemName Fire">
              Fire
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img006} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0006</span>
          <h2 className='name'>Charizard</h2>
          <div className="system">
            <span className="systemName Fire">
              Fire
            </span>
            <span className="systemName Flying">
              Flying
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img007} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0007</span>
          <h2 className='name'>Squirtle</h2>
          <div className="system">
            <span className="systemName Water">
              Water
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img008} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0008</span>
          <h2 className='name'>Wartortle</h2>
          <div className="system">
            <span className="systemName Water">
              Water
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img009} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0009</span>
          <h2 className='name'>Blastoise</h2>
          <div className="system">
            <span className="systemName Water">
              Water
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img010} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0010</span>
          <h2 className='name'>Caterpie</h2>
          <div className="system">
            <span className="systemName Bug">
              Bug
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img011} alt="" className='img'/>
        </div>
        <div className="information">
          <span className='number'>#0011</span>
          <h2 className='name'>Metapod</h2>
          <div className="system">
            <span className="systemName Bug">
              Bug
            </span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="box_img">
          <img src={img012} alt="" className='img'/>  
        </div>
        <div className="information">
          <span className='number'>#0012</span>
          <h2 className='name'>Butterfree</h2>
          <div className="system">
            <span className="systemName Bug">
              Bug
            </span>
            <span className="systemName Flying">
            Flying
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PokemonCard