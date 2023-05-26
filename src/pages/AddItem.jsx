import React,{useState} from 'react'
import { Link } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/inventories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name,place: place ,price: price  }),
    })
    .then((response) => response.json())
    .then(() => {
      console.log("Success");
      window.location.href = "/";
    })
    .catch((error) => console.error(error));


  };
  return (
    <>
    <center>
      
        <form onSubmit={handleSubmit}>
    <div className="card col-md-6 addbar ">
        <div className="card-body">
        <div className="form-group">
            <h4 >სახელი</h4>
            <input type="text" name='name' className="form-control" value={name} required onChange={(event) => setName(event.target.value)} />
          </div>
          <br />
          <div className="form-group">
            <h4 >ფასი(₾)</h4>
            <input type="number"  className="form-control" id="price" value={price} name="price"required onChange={(event) => setPrice(event.target.value)}/>
          </div>
          <br />
          <div className="col-sm-3">
            <select
              className="form-select md sav productType"
              onChange={(event) => setPlace(event.target.value)}
              value={place}
              name='place'
              required
            >
              <option  value="სათაო ოფისი">სათაო ოფისი</option>
              <option value="კავეა გალერია">კავეა გალერია	</option>
              <option value="კავეა ისთ ფოინთი">კავეა ისთ ფოინთი	</option>
              <option value="კავეა თბილისი მოლი">კავეა თბილისი მოლი	</option>
            </select>
          </div>
          <br/>
          <div className='col-sm-3'>
          <button className="btn btn-success btn-lg">დამატება</button>
          </div>
          </div>
          </div>
          </form>
          <hr/>
          <Link to={"/"}><button className="btn btn-secondary">გასვლა</button></Link>

          </center>
          
          </>
  );
}
  


export default AddItem