export default function Events({updatePage}){
    const message='';
    const handleClick = () =>{
        updatePage(message)
    }
    return(
        <div>{message}</div>
    )
}