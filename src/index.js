import React , { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Tours from './Tours';
import './index.css'

const url = 'https://course-api.com/react-tours-project';

const Page = () => {

  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
    setIsLoading(false);
    setData(tours);
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  function removeEle(id) {
    const removedArr = data.filter((tour) => tour.id !== id);
    setData(removedArr);
  }

  return (
  <>
    <main>
      <h1>Our Tours</h1>
      <Tours tours={data} removeEle={removeEle}/> 
    </main>
  </>
  );
}

ReactDOM.render(
  <Page/>,
  document.getElementById('root')
);
