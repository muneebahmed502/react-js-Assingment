import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
//   const [condition , setcondition] = useState(true)
//   const [list, setList] = useState([])
//   const [text, settext] = useState()
//   const [update, setupdate] = useState()

// function addItem(){
//   setcondition(true)
// const copylist = [...list]
// copylist.push(text)
// setList(copylist)
// settext('')
// // console.log(list)
// }

// function inputValue(e){
//  const value = e.target.value
//  settext(value)
// // console.log(value)
// }
// function editItem(index){
//   setcondition(false)
//  var edit =  list[index]
//  setupdate(index)
//  settext(edit)
// // console.log(edit)
// }
// function updateItem(){
// // var updatdeValue = list[update]
// // updatdeValue = text 
// setcondition(true)
// const copylist = [...list]
// copylist[update] = text
// setList(copylist)
// settext('')
// // console.log(updatdeValue)
// }


const [list , setList] = useState([])
const [inputText , setinputText] = useState()
const [update , setUpdate] = useState()
const [condition , setcondition] = useState(true)


function addItem(){
const copylist = [...list]
copylist.push(inputText)
setList(copylist)
setinputText('')
}
function inputValue(e){
const value = e.target.value
setinputText(value)
}
function deleteall(){
setList([])
}

function editItem(index){
  setcondition(false)
var edit = list[index]
setUpdate(index)
setinputText(edit)
}
function updateItem(){
var updatdeValue = list[update]
updatdeValue= inputText
var copylist= [...list]
copylist[update] = inputText
setList(copylist)
setinputText('')
setcondition(true)

}

function deleteItem(index){
var copylist = [...list]
copylist.splice(index,1)
setList(copylist)
}
  return (
    <div className="App">
      <header className="App-header">
       {/* <input  onChange={inputValue} value={text} name="" id="" placeholder='enter some thing'/> 
      { condition ?
       <button onClick= {addItem}>add</button>
       : 
       <button onClick= {updateItem}>update</button>
      }
 <ul>
{list.map(function (item, index){
  return <li>{item}

  <button onClick={() => editItem(index)}>edit</button>
   
  </li>
  
})}

 </ul> */}






















<input onChange={inputValue} value={inputText} type="text" placeholder='enter some thing' />
{ condition ?
<button onClick={addItem}>add</button>:
<button onClick={updateItem}>update</button>
}
<button onClick={deleteall}>Delete All</button>
<ul>
{list.map (function(item,index){
  return <li>
    {item} 
    <button onClick={()=> editItem(index)}>edit</button>
    <button onClick={()=> deleteItem(index)}>Delete</button>
  </li>
})}
</ul>
      </header>
    </div>
  );
}

export default App;
