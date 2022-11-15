export default async function post(req,res)
{
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    res.status(200).json(data)
}