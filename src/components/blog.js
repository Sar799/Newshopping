import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style/App.css'
import logo from './../images/ship.jpg';
import logo1 from './../images/rob.jpg';
import logo2 from './../images/starrynight.jpg';
import logo4 from './../images/mic.jpg';
function BLOG() {
    return (
<>
 <div className = "navbar_blog">
    <div className="header">
       <p className="bloghead">Blog</p> 
   </div>
</div> 
<div className="head2">
  <div className="nav">

  <a className="btn btn-large btn-dark" href="/home">HOME</a>
{/* <button className="btn1">BLOG</button> */}
<a className="btn btn-large btn-dark" href="/">LOGOUT</a>
<a className="btn btn-large btn-dark" href="/Car">Cart</a>

  </div>
  </div>



<div className="card1">
      <h2>MC Escher: An enigma behind an illusion</h2>
      <h5>It’s an artwork that has been reproduced countless times in popular culture. But behind the familiar picture is a mysterious figure. Alastair Sooke goes in search of MC Escher.</h5>
      <div className="fakeimg">
     <img src={logo1} id = 'piece' /> 
      </div>
      <p>Escher fooled all of us by exploring such abstract ideas as eternity, infinity, and the impossible in apparently realistic prints that were amazingly well made. As the general public lost contact with the art world, Escher’s prints seemed simple and easy to understand.</p><br/>
    </div>
    
    <div className="card1">
      <h2>This Master Of Magic Realism Left His Unique Paintings For The World To Celebrate</h2>
      <h5>The works of Robert Gonsalves, a Canadian artist lovingly referred to as Rob Gonsalves, compels you to keep looking at them totally spellbound. And it’s not only some of his works that gets you glued, but all of them also have that magical quality.</h5>
      <div className="fakeimg">
     <img src={logo} id = 'piece' /> 
      </div>
      <p>The works of Robert Gonsalves, a Canadian artist lovingly referred to as Rob Gonsalves, compels you to keep looking at them totally spellbound. And it’s not only some of his works that gets you glued, but all of them also have that magical quality.</p>
    </div>
    <br/>

    <div className="card1">
      <h2>Starry Night- Vincent Willem van Gogh</h2>
      <h5>In creating this image of the night sky—dominated by the bright moon at right and Venus at center left—van Gogh heralded modern painting’s new embrace of mood, expression, symbol, and sentiment. </h5>
      <div className="fakeimg">
     <img src={logo2} id = 'piece' /> 
      </div>
      <p>Starry Night is one of the most recognized pieces of art in the world. It is absolutely everywhere, too. It can be seen on coffee, mugs, t-shirts, towels, magnets, etc. Honestly, it sometimes feels as if the painting’s fame has exceeded that of its creator. It is a magnificent piece of art. That Starry Night resonates with so many people is a testament to how its beauty is timeless and universal.</p>
    </div>
    <br/>

    <div className="card1">
      <h2>The Creation of Adam – Michelangelo</h2>
      <h5>It is well-known that Michelangelo was an exceptional artist, architect and sculptor. However, not many people know that he was also an expert anatomist, who used to dissect corpses with the intention of producing anatomical sketches </h5>
      <div className="fakeimg">
     <img src={logo4} id = 'piece' /> 
      </div>
      <p>There are reasons to believe that Michelangelo left such anatomical illustrations behind in many of his works. The Creation of Adam, one of his most iconic works in the Sistine Chapel, is one such example.</p>
    </div>
    <br/>


    <div className="card1">
      <h2>About Me</h2>
      <p>Hi. I am Sreeja. Some of my favourite artists are Vincent Van Gogh, Rob Gon Salves, M.C. Escher and Leonardo Da Vinci.</p>
    </div>
   
    <div className="card1">
      <h3>Follow Me</h3>
      <p>Instagram - @sreeja_artac</p>
      <p>Behance - @sreeja_kr</p><br/>
    </div>

 
  </>

        );
  
    }
    
    export default BLOG;
    