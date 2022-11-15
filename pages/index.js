import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home({posts}) {
  const router = useRouter()

  const Post = ({data:{userId,id,title}}) => {

    return (
      <div onClick={() => router.push(`/post/${id}`)} style={{textAlign:'center',display:'flex',flexDirection:'column',border:'1px solid brown',marginBottom:'5px',width:'300px',justifySelf:'center'}}>
          <h5>{userId}</h5>
          <h6>{id}</h6>
          <p>{title}</p>
      </div>
    )
  }
  return (
    <>
    <Head>
      <title>Home</title>
      <meta content='home-page' name='keywords'/>
    </Head>
   <div className='home-container'>
    <h2 style={{textAlign:'center'}}>Home</h2>
    <div style={{display:'flex',justifyContent:'center'}}>
    <Link href={'/about'} style={{color:'blue',textAlign:'center'}}>About</Link>
    </div>

    <div style={{height:'auto',display:'flex',flexDirection:'column', alignItems:'center'}}>
      {posts.map((post) => <Post key={post.id} data={post}/>)}
    </div>

    </div>
    </>
  )
}


export async function getStaticProps()
{
    
    const data  = await fetch('http://localhost:3000/api/posts')
    if(!data)
    {
      return {
        notFound:true
      }
    }
    const json = await data.json()

    return{
      props:{
        posts:json
      }
    }
}
