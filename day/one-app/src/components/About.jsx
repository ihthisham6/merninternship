import React from 'react';
import './About.css'; // Assuming you have a CSS file for these styles
import a from './a.jpg';
import d from './d.jpg';
import amjpg from './amjpg.jpg';
import i from './i.jpg';
import p from './p.jpg';
import pr from './pr.jpg';
const About = () => {
  return (
    <div className="container">
      <h1 className="text-center">Meet Our Team</h1>
      <div className="row">
        {/* Member 1 */}
        <div className="col-md-4 member-card">
          <img src={amjpg} alt="Member 1" />
          <h2>Aman</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias facere
            voluptates soluta iusto, quidem incidunt, autem, sunt minima quod a adipisci!
            Autem libero architecto harum quasi atque natus reprehenderit dolore.
          </p>
        </div>
        {/* Member 2 */}
        <div className="col-md-4 member-card">
          <img src={a} alt="Member 2" />
          <h2>Aksha</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum incidunt,
            fuga quis doloribus alias, nisi tempora amet quisquam quod quae eius impedit
            autem voluptate eaque molestiae tempore minima fugit officiis?
          </p>
        </div>
        {/* Member 3 */}
        <div className="col-md-4 member-card">
          <img src={d} alt="Member 3" />
          <h2>Dayanand</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, asperiores earum
            molestias quod quos hic dolorem dolorum labore vel quam doloribus error delectus
            maiores, neque nemo unde eligendi dignissimos sed!
          </p>
        </div>
      </div>
      <div className="row">
        {/* Member 4 */}
        <div className="col-md-4 member-card">
          <img src={i} alt="Member 4" />
          <h2>Ihthisham</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sequi tenetur sit,
            dignissimos enim quibusdam maxime assumenda possimus, repudiandae nostrum, autem quis
            reprehenderit aut at officiis earum consequatur cumque atque?
          </p>
        </div>
        {/* Member 5 */}
        <div className="col-md-4 member-card">
          <img src={p} alt="Member 5" />
          <h2>Poornika</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quam eius,
            totam quidem molestiae harum assumenda corrupti,
            omnis voluptas nescrniunt laborum! Velit quo cupiditate, a cumque quos illum distinctio dignissimos?
          </p>
        </div>
        {/* Member 6 */}
        <div className="col-md-4 member-card">
          <img src={pr}alt="Member 6" />
          <h2>Prateeksha</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, illum asperiores earum
            sapiente consectetur eos distinctio aut qui aliquid adipisci aperiam est inventore sint!
            Saepe consequatur unde quaerat dolore ad?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

