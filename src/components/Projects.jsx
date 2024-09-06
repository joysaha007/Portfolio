import React from 'react'
import project from './data/projects.json'
const Projects = () => {
    return (
        <>
            <div className="container projects my-5" id='projects'>
                <h1>PROJECTS</h1>
                <div className="row d-flex justify-content-center align-content-center">
                    { project.map((data) => (
                        <>
                            <div key={ data.id } className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4 project1">
                                <div className="card bg-dark text-light" style={ { width: "18rem", border:'1px solid yellow',boxShadow:'5px 5px 10px 7px rgba(101, 175, 10, 0.5)' } }
                                data-aos='flip-right'
                                data-aos-duration='1000'
                                >
                                    <div className="img d-flex justify-content-center align-content-center p-3">
                                        <img className="card-img-top" src={data.imageSrc } alt="..." style={ { width: '200px', height: '200px', border: '2px solid yellow', borderRadius:'10px' } } /></div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{ data.title }</h5>
                                        <p className="card-text">{ data.description }</p>
                                        <a href={data.demo} className="btn btn-outline-warning mx-3">Demo</a>
                                    </div>
                                </div>
                            </div>

                        </>
                    )) }
                </div>
            </div>
        </>
    )
}

export default Projects