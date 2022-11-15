export default async function post(req,res)
{
    const { id } = req.query;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(!resp){
       res.status(404).json({error:'not found'})
    }
    const data = await resp.json()
    res.status(200).json(data)
}