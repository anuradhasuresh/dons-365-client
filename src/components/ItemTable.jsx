import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import EditItemDetails from './EditItemDetails';
import axios from 'axios';


function ItemTable() {
const [listOfItems, setListOfItems] = useState([]);
const [itemList, setItemList] = useState([]);
useEffect(() => {
    axios.get("http://3.144.156.111/api/items/getItems")
    .then((response) => {
        const allItems = response.data.response;
        
        setListOfItems(allItems)
        allItems.forEach(item => {
            if(item.userId == JSON.parse(sessionStorage.getItem('userId'))){
                const userItems = userItems.add(item);
                setItemList(userItems);
            }
        });
        // console.log(items)
    })
    .catch(error => {
        console.log(error)
    })
}, [])
return itemList.map((item)=>(
        <tr>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><EditItemDetails /></td>
        </tr>
  ))
}

export default ItemTable