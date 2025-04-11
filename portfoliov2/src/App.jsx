import { useState, useEffect } from 'react'
import {LoadingScreen} from './assets/components/LoadingScreen'
import './index.css'
import './App.css'
import { About } from './assets/components/sections/About'
import { AboutMobile } from './assets/components/sections/AboutMobile'
const image2 = '/portfoliov2/image2.png'

const image1 = 'https://mynavu.github.io/portfoliov2/image1.png'


const projectsData = [
  {
    name: "Globit",
    imageUrl: "https://mynavu.github.io/portfoliov2/globit_thumbnail.png", 
    caption: "Full stack app for users to geotag images onto a personal globe. Built with vanilla JS and Supabase.",
    webUrl: "https://globit.netlify.app/",
    github: "https://github.com/mynavu/Globit-V2"
  },
  {
    name: "Vocabular",
    imageUrl: "https://mynavu.github.io/portfoliov2/vocabular_thumbnail.png", 
    caption: "A wordle clone for English learners through a gamified approach to learn new vocabularies.",
    webUrl: "https://mynavu.github.io/Vocabular/",
    github: "https://github.com/mynavu/Vocabular"
  },
  {
    name: "Word Cloud for Messages",
    imageUrl: "https://mynavu.github.io/portfoliov2/wordcloud_thumbnail.png", 
    caption: "Visualizing user's word frequencies and overall quantity in Facebook/Instagram chats.",
    webUrl: "https://mynavu.github.io/Word-Cloud-for-Messages/",
    github: "https://github.com/mynavu/Word-Cloud-for-Messages"
  },
  {
    name: "Art Portfolio",
    imageUrl: "https://mynavu.github.io/portfoliov2/portfolio_thumbnail.png", 
    caption: "Includes all my best work across various mediums.",
    webUrl: "https://mynavu.github.io/art-portfolio/index.html",
    github: "https://github.com/mynavu/art-portfolio"
  }
]


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(image1);
  const [isVisible, setIsVisible] = useState(false);

  const handleImageChange1 = () => {
    setCurrentImage(image1);
  };
  const handleImageChange2 = () => {
    setCurrentImage(image2);
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3500);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className={`${isLoaded ? 'unhidden' : 'hidden'}`}>
          {screenWidth > 800 ? (
            <>
              <About image={currentImage} onImageChange1={handleImageChange1} onImageChange2={handleImageChange2} currentData={projectsData} onFinishLoading={isVisible} />
            </>
          ) : (
            <>
              <AboutMobile image={currentImage} onImageChange1={handleImageChange1} onImageChange2={handleImageChange2} currentData={projectsData} onFinishLoading={isVisible}/>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App