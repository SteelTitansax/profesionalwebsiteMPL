import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {BlogArticles, nodeExperiences, reactProjects, reactNativeProjects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'

const Blog = () =>
<Layout>

{/** Blog */}
<div className="row mt-5">

      <div className="col-md-12">
            <div className="card card-body bg-primary">
                <div className="row">
                    <div className="col-md-12 border-bottom">
                        <h1 className="text-center text-light"> Blog</h1>
                    </div>
                        


                    <div className="col-md-12 mt-3">
                        <h3 className="text-center text-light"> Articulos</h3>
                        <hr className="bg-white "/>
                    </div>        

                    {
                          BlogArticles.map(({name,description,image,link},i) => (
                            
                                <div className="col-md-3 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow ">
                                        <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                    </div>
                                    <div className="card-body ">
                                        <h5 className="text-center"><strong>{name}</strong></h5>
                                        <p className="text-center">{description}</p>
                                        <div className="text-center">
                                        <a className="btn btn-secondary border button-card" href ={link}>Code</a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                          ))
                      }

                      
                    

                    
                    

                </div>

               


            </div>

           


      </div>     
       
</div>
</Layout>

export default Blog;