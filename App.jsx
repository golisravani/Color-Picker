import ColorPicker from "./ColorPicker.jsx";

function App(){
 return(<ColorPicker/>);
}

export default App;























/*import List from "./List.jsx";
function App(){
    const fruits = [
        { id: 1 , name:"Apples", calories:95},
                    {  id: 2 , name: "Banana", calories:106}, 
                    { id: 3 , name:"Sapota", calories:99},
                    {  id: 4 , name:"Grapes" , calories:86} ,
                    { id: 5, name:"Kiwi", calories:109},
                    { id: 6, name:"Orange", calories:100}
       ];
       const vegetables = [{ id: 6 , name:"Spinach", calories:360},
                           {  id: 7 , name:"Broccoli", calories:125}, 
                           { id: 8 , name:"carrots", calories:98},
                           {  id: 9 , name:"corn" , calories: 87} ,
                           { id: 10, name:"Potatoes", calories:63},
                           { id: 11, name:"Tomatoes", calories:56}
       ];
return (
    <>
  { fruits.length > 0 && <List items= {fruits} category= "Fruits"/> }
  { vegetables.length > 0 &&  <List items= {vegetables} category= "Vegetables"/> }

    </>
);
} */