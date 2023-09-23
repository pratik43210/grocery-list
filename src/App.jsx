/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import AddItem from './components/AddItem.jsx'
import SearchItem from './components/SearchItem.jsx'


function App() {
  const [items, setItems]= useState(JSON.parse(localStorage.getItem("shoppingList"))||[]);
  const [search, setSearch]=useState('');

  useEffect(()=>{
    localStorage.setItem("shoppingList",JSON.stringify(items));
  },[items]);

  // const setAndSaveItems=(listItems)=>{
  //   setItems(listItems);
  //   localStorage.setItem("shoppingList", JSON.stringify(listItems));
  // }

  const handleCheck=(id)=>{
      // console.log(`key:${id}`)
      const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
      setItems(listItems);
  }

  const handleDelete=(id)=>{
      // console.log(`key:${id}`)
      const listItems=items.filter((item)=>item.id!==id);
      setItems(listItems);
  }

  const [newItem,setNewItem]=useState('');

  const addItem=(item)=>{
    const id=items.length?items[items.length-1].id+1:1;
    const myNewItem={id,checked:false,item};
    const listItems=[...items,myNewItem];
    setItems(listItems);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    // console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='App'>
      <Header title="Grocery List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item=>item.item.toLowerCase().includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  )
}

export default App
