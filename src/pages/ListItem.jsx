import React, {useEffect,useState} from 'react'
import trashImage from "../assets/trash_2.svg"
import { Link } from "react-router-dom";

const ListItem = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    const handleNextPage = () => { 
        setCurrentPage(currentPage+1);

      };
    const handlePrevPage = () =>{
      if(currentPage > 1){
        setCurrentPage(currentPage-1)
    }
    }
    const loadItems = async () => {
      try {
        const response = await fetch(`http://localhost:3001/inventories?page=${currentPage}`);
        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Error retrieving items:', response.status);
        }
      } catch (error) {
        console.error('Error retrieving items:', error);
      }
    };
  
    const deleteItem = async (itemId) => {
      try {
        const response = await fetch(`http://localhost:3001/inventories/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          loadItems();
        } else {
          console.error('Error deleting item:', response.status);
        }
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    };
  
    useEffect(() => {
      loadItems();
    }, [currentPage]);





  return (
    <>
    <div >
      <h1>Inventories</h1>

      <table className="table table-bordered table-striped">
      <thead>
        <tr>
      <th scope="col"> სახელი </th>
      <th scope="col"> ადგილი</th>
      <th scope="col" > ფასი </th>
      <th scope="col"> წაშლა</th>
      </tr>
      </thead>
      <tbody>
     
        {items.map((item) => (
          <>
    <tr>
      <td >{item.name} </td>
      <td>{item.place}</td>
      <td >{item.price} </td>
      <td ><a href="#"><img itemType='button' src={trashImage} onClick={() => deleteItem(item.id)}/></a></td>
    </tr>
          </>
        ))}
        </tbody>
      </table>
      <Link to={"/add"}><button className="btn btn-success btn-lg">დამატება</button></Link>


      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className='page-item'>
      <a className="page-link" onClick={handlePrevPage} href="#">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
    <li className="page-item">
      <a className="page-link" onClick={handleNextPage} href="#">Next</a>
    </li>
  </ul>
</nav>





    </div>
    </>
  )
}

export default ListItem