
const search =(props)=>{
    return <div>
        <input  onChange={(event)=>props.onSearch(event.target.value)}/>
    </div>
}
export default search
