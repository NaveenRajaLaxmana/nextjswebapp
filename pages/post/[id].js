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
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const res = await data.json()
    return {
        paths: res.map(p => ({
            params: {id: p.id.toString()}
        })),
        fallback:false //false=if not found=404 page,true=wait new data from server and add to other html build,blocking=until finished fetch new data the page persists
    }
}

export async function getStaticProps(context)
{
    const {id} = context.params
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
        },
        revalidate:10 //revalidate the props for given 10 seconds
    }
}