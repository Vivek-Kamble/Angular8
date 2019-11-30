function A(B)
{
    setTimeout( () =>{
        B()
    },2000)
    console.log("in A")
}
function B()
{
    console.log("in b")
}
A(B)