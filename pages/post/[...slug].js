import { useRouter } from "next/router"
const Extrapage = () => {
    const router = useRouter()
    console.log(router.query.slug)
  return (
    (
        <div style={{textAlign:'center'}}>Extra page </div>
    )
  )
}

export default Extrapage