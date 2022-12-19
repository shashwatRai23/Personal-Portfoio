import React from 'react'
import "./Projects.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const Projects = () => {

  const data=[
    {
      id: 1,
      image: img1,
      title: "Ecommerce Application",
      github: 'https://github.com/shashwatRai23/Ecommerce-website',
      demo: 'https://github.com/shashwatRai23/Ecommerce-website',
    },
    {
      id: 2,
      image: img2,
      title: "Expense Manager",
      github: 'https://github.com/shashwatRai23/Expense-Manager-App',
      demo: 'https://expense-manager-234977.netlify.app',
    },
    {
      id: 3,
      image: img3,
      title: "Chat Application",
      github: 'https://github.com/shashwatRai23/Chat-Application',
      demo: 'https://chat-app-f6036a.netlify.app',
    },
    {
      id: 4,
      image: img4,
      title: "Meme Generator",
      github: 'https://github.com/shashwatRai23/Meme-Generator',
      demo: 'https://meme-generator-bb3c52.netlify.app',
    },
  ]

  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container projects__container'>
        {data.map(({id,image,github,title,demo})=>{
            return(
              <article className='project__item' key={id}>
                <div className='project__item-image'>
                  <img src={image} alt="project_img"/>
                </div>
                <h3>{title}</h3>
                <div className='project__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live demo</a>
                </div>
              </article>
            )
        })}
      </div>
    </section>
  ) 
}

export default Projects