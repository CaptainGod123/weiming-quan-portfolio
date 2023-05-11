// import logo from './logo.svg';

import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Particles from './components/ParticlesBG';

import homePic from './image/homepic.png';
import myPic from './image/me1.jpg';
//{<img src = {homePic} width="75" alt="" />}


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky = "top" expand = "sm" collapseOnSelect>
        <Container>
          <a href = 'home'>
          <Navbar.Brand href="#">{<img src = {homePic} width="75" alt="" />}</Navbar.Brand>
          </a>
          <Nav className="justify-content-end">
              <Nav.Link href="#projects">My Projects</Nav.Link>
              <Nav.Link href="#contact">Contact me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className = "content">
        <a className = "anchor" id = "home"></a>
        <Particles />
        <div id="container">
          <div id="left-column">
            <div className ='pic'>      
              <img src = {myPic} alt = "me" />
            </div>
          </div>

          <div id="right-column">
            <div id = 'header'>
              <p>Hi, my name is Weiming Quan,</p>
              <p>Welcome to my Website!</p>
            </div>
            <div id ='text'>
              <p>As a second-year student at the University of Toronto Mississauga, I am honing my expertise in the field of computer science, while also delving into the intricacies of statistics and economics through my major studies. I am also an analyst at the Capital Management club at UTM, where I am able to fully indulge my passion for statistics and economics. In my leisure time, I am an avid enthusiast of coding, traveling, and gaming, always seeking new experiences. Attending hackathons is also a particular interest of mine, as it allows me to challenge myself and push the boundaries of my knowledge and abilities. Please click on "My Projects" to learn more about the projects I worked on. Please don't hesitate to reach out.</p>
            </div>
          </div>
        </div>
      </div>





      <div className = "content">
        <a className = "anchor" id = "projects"></a>
        This is my projects 




        <div id="project-container">
          <div id="pleft-column">
          <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
          </div>

          <div id="pright-column">
          <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
          </div>
        </div>
      </div>




      <div className = "content">
      <a className = "anchor" id = "contact"></a>
        This is my contacts 
      </div>



    </div>
  );
}

export default App;
