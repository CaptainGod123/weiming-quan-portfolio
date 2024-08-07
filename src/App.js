// import logo from './logo.svg';

import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Particles from './components/ParticlesBG';
import Carousel from 'react-bootstrap/Carousel';
import resumePDF from './image/Weiming Quan resume.pdf';

import homePic from './image/homepic.png';
import fakenews from './image/fakenews.jpg';
import stocks from './image/stocks.jpg';
import chatgpt from './image/chatgpt.jpg';
import me from './image/me.png';
import github from './image/github.svg';
import email from './image/email.svg';
import linkedin from './image/linkedin.svg';
import resume from './image/resume.svg';
import myPic1 from './image/me1.jpg';
import myPic2 from './image/Winning Price Pic.jpg';



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
        <div className = "my-titles">
        </div>
        <div id="container">
          <div id="left-column" >
            <div className ='pic'>
              <img src = {myPic1} alt = "me" />
            </div>
          </div>

          <div id="right-column">
            <div id = 'header'>
              <p>Hi, my name is Weiming Quan,</p>
              <p>Welcome to my Website!</p>
            </div>
            <div id ='text'>
              <p>I am a third-year computer science student at the University of Toronto Mississauga, with a passion for statistics and economics. I am also an analyst at the Capital Management club at UTM.</p>
              <p>In my free time, I enjoy coding, traveling, gaming, and attending hackathons to challenge myself.</p>
              <p>Fell free to check out "My Projects" to see some of my work and reach out to me at "My Contacts"!</p>
            </div>
          </div>
        </div>
      </div>

      <div className = "content">
        <a className = "anchor" id = "projects"></a>
        <div className = "my-titles">
          <p>My Projects</p>
        </div>
        
        <div id="project-container">
          <div id="pleft-column">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card>
                  <Card.Header as="h5" className = 'cardMainTitle'><em>Credable</em></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div className = 'cards'>
                        <div className ='left-card'>
                          <img src={fakenews} alt="me"/>
                        </div>
                        <div className ='right-card'>
                          <p>This is a google extension that determines the credibility of the input news article. </p>
                          <Button variant="primary" onClick = {event => window.open('https://github.com/CaptainGod123/Hack_The_Valley_2022_Fake_News_Detector', '_blank')}>Github</Button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card>  
                  <Card.Header as="h5" className = 'cardMainTitle'><em>StockthePast</em></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div className = 'cards'>
                        <div className ='left-card'>
                          <img src={stocks} alt="me"/>
                        </div>
                        <div className ='right-card'>
                          <p>This is a fintech application that helps users practice their investing skills in the stock market. It is designed for a target group who are new to stock investing.</p>
                          <Button variant="primary" onClick = {event => window.open('https://github.com/CaptainGod123/StockThePast', '_blank')}>Github</Button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div id="pright-column">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card>  
                  <Card.Header as="h5" className = 'cardMainTitle'><em>CallGPT</em></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div className = 'cards'>
                        <div className ='left-card'>
                          <img src={chatgpt} alt="me"/>
                        </div>
                        <div className ='right-card'>
                          <p>This is an application that allows users to make a phone call to ChatGPT for easier access.</p>
                          <Button variant="primary" onClick = {event => window.open('https://github.com/CaptainGod123/DeerHack_CallGPT', '_blank')}>Github</Button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card>  
                  <Card.Header as="h5" className = 'cardMainTitle'><em>this.website</em></Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <div className = 'cards'>
                        <div className ='left-card'>
                          <img src={me} alt="me"/>
                        </div>
                        <div className ='right-card'>
                          <p>This personal website is written in the languages JavaScript (React), CSS, and HTML.</p>
                          <Button variant="primary" onClick = {event => window.open('https://github.com/CaptainGod123/weiming-quan-portfolio', '_blank')}>Github</Button>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>

      <div className = "content">
      <a className = "anchor" id = "contact"></a>
        <div className = "my-titles">
          <p>My Contacts</p>
        </div>
        <div className ='contacts'>
          <div>
            <li>
              <div>
                <Button size="lg" variant="top" onClick={event =>  window.open('https://www.linkedin.com/in/weiming-quan-6280b0243/', '_blank')}>
                  <img src={linkedin} alt="me"/>
                </Button>
              </div>
              <p>Linkedin</p>
            </li>
            <li>
                <Button size="lg" variant="top" onClick={event =>  window.open('https://github.com/CaptainGod123', '_blank')}>
                  <img src={github} alt="me"/>
                </Button>
                <p>Github</p>
            </li>
            <li>
                <Button size="lg" variant="top" onClick={() => window.location = 'mailto:qwm0728@gmail.com'}>
                  <img src={email} alt="me"/>
                </Button>
                <p>Email</p>
            </li>
            <li>
                <Button size="lg" variant="top" onClick={event =>  window.open(resumePDF, '_blank')}>
                  <img src={resume} alt="me"/>
                </Button>
                <p>Resume</p>
            </li>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
