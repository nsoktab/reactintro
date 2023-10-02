/*export default function Greeting({name, mystyle, bgcolor}){

 const hi="Hi, how are you ";
 return(
    <h2 style={{color:mystyle, background:bgcolor}}>{hi}{name}?</h2>
 )

}*/

export default function Greeting(props){
    const hi ="Hi, how are you ";

    return(
        <h2 style={{color:props.mystyle, background:props.bgcolor}}>{hi}{props.name}?</h2>
    )
}