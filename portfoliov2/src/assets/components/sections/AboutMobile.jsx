import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SpotlightCard from '../SpotlightCard';

export const AboutMobile = ({ image, onImageChange1, onImageChange2, currentData, onFinishLoading }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      };
    return (
    <section id="home">
        <div className="aboutContainer">
        <SpotlightCard className="custom-spotlight-card bio">
        <p className='thin long'>
                    ◆ software dev and student studying <span className='white'>cs</span> and <span className='white'>stat</span>
                    <br></br>
                    ◇ actively engagged in <span className='white'>software engineering</span> and <span className='white'>data science</span>
                    <br></br>
                    ◆ currently taking courses in <span className='white'>cs, maths, stat, and econ</span>
                    </p>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card stats">
        <h3 className="titleFont white center">myna vu</h3>
                    <div className="profile">
                    </div>
                    <img className="profileImage" src={image}></img>
                    <p className='center white'>rank: first year CS student</p>
                    <p className='center white'>spawn: Vietnam</p>
                    <div className="questBar">
                            <p className="label">GPA</p>
                            <div className="progressBar">
                                <div className={`yellowBar ${onFinishLoading ? 'nintyPercent' : ''}`}></div>
                            </div>
                    </div>
                    <div className="questBar">
                            <p className="label">sleep</p>
                            <div className="progressBar">
                                <div className={`blueBar ${onFinishLoading ? 'twentyPercent' : ''}`}></div>
                            </div>
                    </div>
                    <div className="questBar">
                            <p className="label">vibes</p>
                            <div className="progressBar">
                                <div className={`pinkBar ${onFinishLoading ? 'hundredPercent' : ''}`}></div>
                            </div>
                    </div>
                    <h4 className="titleFont white">contact</h4>
                    <div className="contacts">
                        <a href="https://www.linkedin.com/in/myna-vu-237091322/" target="_blank"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/mynavu" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="mailto:avu13@uclive.ac.nz"><i className="bi bi-envelope-fill"></i></a>
                    </div>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card quests">
        <h3 className="titleFont white center">quests&nbsp; 
                        <i className="bi bi-backpack4-fill"></i>
                    </h3>
                    <h4 className="titleFont white">current</h4>
                    <div className="questBar">
                        <p className="label">getting an internship</p>
                        <div className="progressBar">
                        </div>
                    </div>
                    <h4 className="titleFont white">in progress</h4>
                    <div className="questBar">
                        <p className="label">BSc in cs</p>
                        <div className="progressBar">
                            <div className={`greenBar ${onFinishLoading ? 'tenPercent' : ''}`}></div>
                        </div>
                    </div>
                    <div className="questBar">
                        <p className="label">learn react</p>
                        <div className="progressBar">
                            <div className={`greenBar ${onFinishLoading ? 'thirtyPercent' : ''}`}></div>
                        </div>
                    </div>
        </SpotlightCard>
                <h4 className='center'>→ view my <a href='https://docs.google.com/document/d/1-k0W10jzwevb6pspTTL6hp3bLAj1jgDwr_VGr0AC_G4/edit?usp=sharing' target="_blank" className='resumeLink'>resume</a></h4>
        </div>
        <SpotlightCard className="custom-spotlight-card skillsContainer">
        <h3 className="titleFont white center">skills&nbsp;
             <i className="bi bi-stars"></i>
            </h3>
            <div className="fourSkills">
                <div className="langContainer">
                    <h4 className="titleFont">languages</h4>
                    <div className="lang">
                        <p className="blue">Python</p>
                        <p className="orange">HTML</p>
                        <p className="yellow">CSS</p>
                        <p className="blue">SQL</p>
                        <p className="green">Bash</p>
                        <p className="yellow">JavaScript</p>
                    </div>
                </div>
                <div className="techContainer">
                    <h4 className="titleFont">technologies</h4>
                    <div className="tech">
                        <p className="lightGreen">Node.js</p>
                        <p className="blue">PostgreSQL</p>
                        <p className="green">Supabase</p>
                        <p className="cyan">React</p>
                    </div>
                </div>
                <div className="creativeContainer">
                    <h4 className="titleFont">creative</h4>
                    <div className="creative">
                        <p className="blue">Photoshop</p>
                        <p className="orange">Illustrator</p>
                        <p className="cyan">Maya</p>
                        <p className="purple">Canva</p>
                    </div>
                </div>
                <div className="devToolsContainer">
                    <h4 className="titleFont">dev tools</h4>
                    <div className="devTools">
                        <p className="red">Git</p>
                        <p className="blue">VSCode</p>
                        <p className="orange">Claude</p>
                        <p className="white">Grok</p>
                    </div>
                </div>
            </div>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card achievementsContainer">
        <h3 className="titleFont white center">achievements <br></br>unlocked&nbsp;
            <i className="bi bi-unlock-fill"></i>
            </h3>
            <div className="achievements">
                <div className="achievement">
                    <h4 className="achievementName yellowBorder white">
                        <i className="bi bi-trophy-fill"></i>
                        &nbsp;Global Nominee
                    </h4>
                    <p className='small'>chosen as Vietnam's first NASA Space Apps Hackathon nominee</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName greenBorder white">
                        <i className="bi bi-mortarboard-fill"></i>
                        &nbsp;Grade Farmer
                    </h4>
                    <p className='small'>obtained a 4.0 GPA in highschool + 2 princpal's list</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName pinkBorder white">
                        <i className="bi bi-cake-fill"></i>
                        &nbsp;Vanilla Dev
                    </h4>
                    <p className='small'>rigourously covered vanilla HTML, CSS and JS</p>
                </div>
                <div className="achievement">
                    <h4 className="achievementName purpleBorder white">
                        <i className="bi bi-palette-fill"></i>
                        &nbsp;Design Dabbler
                    </h4>
                    <p className='small'>skilled in 3D Modelling, UI/UX, Graphic Design, and etc...</p>
                </div>
            </div>
        </SpotlightCard>
        <h3 className="titleFont white center">projects&nbsp;
            <i className="bi bi-folder-fill"></i>
        </h3>
        <div className="projectsContainer">
                <Slider {...settings}>
                    {currentData.map(data => (
                        <SpotlightCard className="custom-spotlight-card card">
                            <img src={data.imageUrl}></img>
                            <h4 className='titleFont center white'>{data.name}</h4>
                            <p className='small center thin'>{data.caption}</p>
                            <div className='projectLinks'>
                                <a href={data.webUrl} target="_blank"><i className="bi bi-globe"></i></a>
                                <a href={data.github} target="_blank"><i className="bi bi-github"></i></a>
                            </div>
                        </SpotlightCard>
                    ))}
                </Slider>
        </div>
        <div className='footer'>
            <p className='credits'>made with <i className="bi bi-heart-fill pink"></i> and <i className="fa-brands fa-react cyan"></i></p>
            <h5 className=''>2025 © myna vu</h5>
        </div>


    </section>
    );
};