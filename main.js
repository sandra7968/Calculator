//display button content in calculator screen
function display(content){
    result.value += content
}
function allclear(){
    result.value =""
}
function expreval(){
    try{
        result.value=eval(result.value)
    }catch{
        result.value="INVALID"
    }
}
function removelast(){
   result.value= result.value.slice(0,-1)
}