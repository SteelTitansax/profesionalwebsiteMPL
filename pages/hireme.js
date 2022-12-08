import Layout from '../components/Layout'

const hireme = () =>
<Layout footer={false}>


<div className="row mt-4">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <br/>
                           <h4>Contact</h4>
                        <br/>

                            <div class="center">
                                <img src="contacto.png" width="150px" class="spin center" id="avatar"  draggable="false"/>
                            </div>

                        <br/>
                        <h5>Telephone</h5>
                        
                        <h6> +34 629947930 ; +44 7846226624</h6>
                        <br/>
                        <h5>Email</h5>
                        
                        <h6>manuel.portero.leiva@gmail.com</h6>
                    </div>
                </div>
            </div>
    
</Layout>

export default hireme;




