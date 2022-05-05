import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer.js";
import ProductList from "./components/ProductList.js";
import React, {useState} from "react";
import AddItem from "./components/AddItem.js";

function App() {
  const products = [
    { 
      price: 99990, 
      name: "IPhone 10S Max", 
      quantity: 0,
    },
    {
      price: 9999, 
      name: "Redmi Note 10S Max", 
      quantity: 0,
    }
  ];

  let [productList, setproductList] = useState(products)
  let [totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newtotalAmount = totalAmount
    newtotalAmount += newProductList[index].price
    newProductList[index].quantity++
    setproductList(newProductList)
    setTotalAmount(newtotalAmount)
  }

  const decrementQuantity = (index) => {
    let newProductList = [...productList]
    let newtotalAmount = totalAmount
    if(newProductList[index].quantity != 0){
      newProductList[index].quantity--
      newtotalAmount -= newProductList[index].price
      setTotalAmount(newtotalAmount)
    }
    setproductList(newProductList)
  }

  const reset = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setproductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList]
    let newtotalAmount = totalAmount
    newtotalAmount -= newProductList[index].price*newProductList[index].quantity
    newProductList.splice(index, 1)
    setproductList(newProductList)
    setTotalAmount(newtotalAmount)
  }

  const addItem = (name, price) => {
    let actualPrice = parseInt(price)
    let newProductList = [...productList]
    newProductList.push({name: name, price: actualPrice, quantity: 0})
    setproductList(newProductList)
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <AddItem addItem = {addItem}/>
      <ProductList productList={productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem = {removeItem}/>
      </main>
      <Footer totalAmount = {totalAmount} reset = {reset}/>
    </>
  );
}

export default App;
