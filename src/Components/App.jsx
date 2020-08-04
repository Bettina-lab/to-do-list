import React, { useState } from "react";
import Items from "./Items";
import CurrentDate from "./CurrentDate";


function App() {


    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    

    function handleEvent(event) {
        const inputValue = event.target.value;
        setInputText(inputValue);
    }

    function addItems() {
       if (items.length < 8 ) {
        setItems(previous => {
               return [...previous, inputText];
        });
    } else {
        alert('Sorry, the List is full!😞')
    }
      setInputText('');
    }


    function deleteItems(id) {
        //console.log('doubled');
      //  console.log(id)
        setItems(previous => { 
            return  previous.filter((item, index) => {
            return index!==id;
            
        });
      })
    }

  

    return (
        <div className="container">
            <div className="heading">
                <h1 className="heading-text">My To-Do List <i className='fas fa-feather-alt'></i></h1>
            </div>
            <CurrentDate />
            <div className="form-container">
                <input type="text" size="50" value={inputText} onChange={handleEvent}/>
                <button className="btn" type="submit" onClick={addItems}><i className="fa fa-edit"></i>Add</button>

            </div>
            <div className="items-container" >
            <ul className="items-list">
            {items.map((todoItems, index) => 
                <Items
                 id={index}
                  text={todoItems}
                  onDoubleChecked={deleteItems}
                  key={index}             
              />
            )}
           </ul>

            </div>
        </div>
    )
}


export default App;