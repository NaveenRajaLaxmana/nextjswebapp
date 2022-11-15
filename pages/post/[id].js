const PostItem = ({post:{userId,id,title,body}}) => {
    return (
        <div style={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <p>{userId}</p>
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostItem

export async function getStaticPaths()
{
    const data = await fetch('http://localhost:3000/api/posts')
    const res = await data.json()
    return {
        paths: res.map(p => ({
            params: {id: p.id.toString()}
        })),
        fallback:false
    }
}

export async function getStaticProps(context)
{
    const {id} = context.params
    const data = await fetch(`http://localhost:3000/api/posts/${id}`)
    if(!data)
    {
        return{
            notFound:true
        }
    }
    const json = await data.json()
    return{
        props:{
            post:json
        }
    }
}