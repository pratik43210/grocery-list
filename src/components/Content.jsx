/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import ItemList from "./ItemList";
export default function Content({items,setItems,handleCheck,handleDelete}) {
  return (
    <main>
        {items.length?
            (<ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />):(
                <p>Your list is empty ⚠️</p>
            )
        }
    </main>
  )
}