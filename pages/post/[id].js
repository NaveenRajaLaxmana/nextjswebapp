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

export async function getServerSideProps(context)
{
    const {id} = context.params
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(data.status!=200)
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