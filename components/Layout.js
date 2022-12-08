import Navbar from './Navbar'
import Head from 'next/head'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'

const Layout = ({children,footer=true}) => {

    const router = useRouter();

    useEffect(() => { 
        const handleRouteChange =  url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)
        
        router.events.on('routeChangeComplete', () => NProgress.done());

        return () =>  {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

   return( <>
        
        <Navbar/>
        <main className="container main-container">
            {children}
        </main>
          
      {  
            footer && (<footer className ="bg-primary text-white text-center">
            <div className="container p-4">
                <h2>&copy; Portfolio 2019-{new Date().getFullYear()}</h2>
                <h4>  All rights reserved</h4>
                <p>App Powered with React and NextJS</p>
            </div>
        </footer>)
        
        }
    </>
    )
}
export default Layout; 