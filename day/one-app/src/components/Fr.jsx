import React from "react";
import { Link } from 'react-router-dom';
function Fr(){
return(
<div className="container-fluid">
      <nav id="one" className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">RecipeFinder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" target="_blank">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Recipes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Fried Rice Recipe</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" target="_blank">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/log" className="nav-link" target="_blank">Log In</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>

      <div className="row justify-content-center">
    <div className="col-12 col-lg-6">
      <iframe className="w-100" height="750" src="https://www.youtube.com/embed/hoZccEa0Pqo?si=6btoV82zROmt9Cev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <hr></hr>
  <br></br>
    <div className="container-fluid bg-">
    <b>Transcript:</b>
    <br></br>
    <br></br>
    <p>      
(00:00) Hello friends, welcome to my kitchen the K kitchen. Veg Fried Rice is my favorite Chinese dish And it can be made very quickly. In fact, if you have boiled rice at home. Then it's just a matter of minutes. To make Veg Fried Rice. First, we'll heat up the pan. For a perfect Fried Rice, it is very important for the pan to be on high heat So that we can quickly stir fry and cook the rice in it.
<br></br>
<br></br>
(00:38) If we cook the rice for a long time in the pan, The rice will break. So, First and foremost, we'll add some oil. Swirl it, make sure That the oil reaches every corner of the pan First, we'll put Garlic in the pan. Just a light saute. without browning it, add in this, finely chopped Onion. finely chopped Ginger.
<br></br>
<br></br>
(01:10) A little Green Chilli And we'll stir it quickly. None of it has to go brown Just a little quick stir fry. Now we'll add vegetables to this. Your favorite vegetables can be added to this. I have some finely chopped Carrots. Finely chopped Cabbage. Finely chopped Beans We'll give it a quick stir. Now, Fried Rice has loads of recipes There cannot be one correct recipe for Fried Rice.
<br></br>
<br></br>
(01:48) In fact, in China, If you go, in any province, anywhere, in any restaurant or home You will find a different recipe for Fried Rice. Now, We have to quickly stir it for at least 1 minute You don't really need to cook the vegetables Because you want the crunch As the rice is soft, the vegetables should have a good crunch In this, I'm adding a little finely chopped Red Capsicum A little finely chopped Yellow Capsicum If you want, you may put Green Capsicum too, it's all up to you.
<br></br>
<br></br>
(02:21) In this goes some Green Peas. Look at all those colors. Another tip Whenever you add Soya sauce to the Fried Rice Add it on the Rice and not the vegetables The vegetables should not have a dark color Now, we have this boiled Rice Just cover it with boiled Rice On this, we add a pinch of Salt A little Black Pepper Soya sauce, spread the sauce over it.
<br></br>
<br></br>
(02:57) A touch of Vinegar, very very little Now we have to toss it. At this stage, we will add a little water Because of this water, steam forms in this And Rice will be easy to toss. Otherwise The Rice will break. Again, on high heat A little splash of water Now let's toss it. If you are not confident, tossing it So just lift it and fold it. That also works.
(03:40) Towards the end, We add to it chopped Spring Onions One final toss, This is ready. Now we'll plate it. In the center Make a mound Making a mound will keep the rice warm for a long time Plus, It looks more beautiful Our Fried Rice is ready.
</p>
    </div>
    </div>
    
)
}
export default Fr;




