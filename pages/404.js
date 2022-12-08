import Layout from '../components/Layout'
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <h1>404</h1>
        <p>this page does not exists. Please return to 
            <Link href="/">
                 <a>Home</a>
            </Link>
        </p>
    </Layout>
)

export default custom404;