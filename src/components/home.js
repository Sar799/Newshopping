import React from 'react';
import ReactDOM from 'react-dom'; 
import './../style/App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from './../images/i10.jpg'
import Logo2 from './../images/i9.jpg'
import Logo3 from './../images/i8.jpg'
import Logo4 from './../images/i8.jpg'
import Logo5 from './../images/i8.jpg'
import Logo6 from './../images/i11.JPG'
import BLOG from './blog'


function Home() {
  return (
<div className = "mainpagetext">


<div class="bg-img">
  <div class="con">
    <div class="topnav">
    <a  href="/shop">SHOP</a>
      <a  href="/blog">BLOG</a>
      <a href="/">LOGOUT</a>
    </div>
  </div>
</div>

<p className = "Name">Sreeja Krishnamari</p>
<p className = "intro">Welcome to my art gallery! My love of beauty in nature and color is what truly inspires me. Most of my artwork is created by the thrill of exploring and experimenting. What excites me is to see what will happen next, the possibilities. When I paint, I just let go and trust in myself.  I have devoted my artistic talents to creating beautiful abstract paintings that are full of life.
Be sure to check out my artwork! </p>
<div className="grid1">
  <div className="gridd1">
    <div>
      <h1>"Vehement old woman"</h1>
      <h2><i>Blissfful eyes and joyfull smiles through all the misery and pain</i></h2>
    </div>
  </div>
  <div className="gridd2">
    <img src={Logo3} id="craft1"/>
  </div>
</div>


<div className="grid1">
  <div className="gridd2">
    <div>
      <h1>"Wanderlust"</h1>
      <h2><i>A sentimental yearning for reality that isn't genuine. An irrecoverable condition for fantasy that evokes nostalgia or day dreams</i></h2>
      <h5>Inspired by The Chainsmokers @thechainsmokers .</h5>
    </div>
  </div>
  <div className="gridd1">
    <img src={Logo1} id="craft1"/>
  </div>
</div>



<div className="grid1">
  <div className="gridd1">
    <div><h2><i>Can’t lose your mind as it’s inescapable.
      So you follow it inwards as the spiral tightens infinitely,
      ‘Cause to be alive is to be missing.nspired by James Blake’s album cover.</i></h2></div>
    </div>
  <div className="gridd2">
<img src={Logo2} id="craft1"/>
</div>
</div>

<div className="grid1">
  <div className="gridd2">
    <div>
      <h1>"Anxiety"</h1>
      <h2 className= "please"><i>Losing pieces of yourself on the way 
In search of your demon for the lost pieces you share. 
You made a home down there 
So you gallop past your consciousness 
To gather the credence you ran away from 
Cause at this moment that’s all you crave.</i></h2>
    </div>
  </div>
  <div className="gridd1">
    <img src={Logo6} id="craft1"/>
  </div>
</div>

</div>
   );
  
}

export default Home;
