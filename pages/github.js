import { useImperativeHandle } from 'react';
import Layout from '../components/Layout'
import Error from './_error'

const Github = ({user, statusCode}) => {

    if(statusCode) {
        return <Error statusCode={statusCode}/>
    }


    return (
        <Layout footer={false}>
            <div className="row mt-4">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h3>Manuel Portero</h3>
                        <br/>
                        <div class="center">
                                <img src="github.png" width="100px" class="spin center" id="avatar"  draggable="false"/>
                        </div>
                        <br/>
                        <p>Check my contributions on Github</p>
                        <a href="/blog" target="_blank" className="btn btn-outline-primary my-2">My Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-primary ">Go to Github</a>

                    </div>
                </div>
            </div>
        </Layout>
    )


}

export async function getServerSideProps(){
    
    const res = await fetch('https://api.github.com/users/SteelTitansax')
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;
    return {
        props: {
            user: data ,
            statusCode 
        }
    }
}

export default Github;