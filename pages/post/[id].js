import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const PostItem = () => {
    const router = useRouter()
    const {id} = router.query
    const [post,setPost] = useState({
        userId:'',
        id:'',
        title:'',
        body:''
    })
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()).then(data => setPost(data))
    },[id])
    return (
        <div style={{height:'100vh',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <p>{post.userId}</p>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem
