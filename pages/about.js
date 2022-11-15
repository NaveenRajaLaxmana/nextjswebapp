import Head from "next/head"
import { useRouter } from "next/router"

const About = () => {
    const router = useRouter()

    const goBack = () => {
        router.push('/')
    }
  return (
    <>
    <Head>
        <title>About</title>
      <meta content='about-page' name='keywords'/>
    </Head>
    <h2 style={{textAlign:'center'}}>About</h2>
    <div style={{display:'flex',justifyContent:'center'}}>
    <button style={{textAlign:'center'}} onClick={goBack}>About</button>

    </div>
    </>
  )
}

export default About