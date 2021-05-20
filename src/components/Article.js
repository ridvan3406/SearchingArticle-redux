

const articles =({articles,searchTerm})=>{
    return <ul>
        {articles.filter(item=>item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item)=>
        <li key={item.id}> 
            <a href={item.url}> {item.title} </a> 
        </li>)}
    </ul>

}
export default articles