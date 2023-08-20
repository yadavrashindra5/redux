import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber,setProduct } from "./actions";
const Home = () => {
  const myState = useSelector((state: any) => state.changeTheNumber);
  const dispatch = useDispatch();
  const allProducts=useSelector((state:any)=>state.allProduct);
  const productDispatch=useDispatch();
  console.log(allProducts,'all products')
  const saveProduct=()=>{
    const object={
      id:"2",
      product:"Dell laptop"
    }
    productDispatch(setProduct(object));
  }
  return (
    <>
      <div>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div>
          <a
            href=""
            title="Decrement"
            onClick={(e) => {
              e.preventDefault();
              dispatch(decNumber());
            }}
          >
            <span>-</span>
          </a>
          <input type="text" name="quantity" value={myState} />
          <a href="" title="Increment" onClick={() => dispatch(incNumber())}>
            <span>+</span>
          </a>
        </div>
        <button onClick={saveProduct}>save product</button>
        <button onClick={()=>productDispatch(decNumber())}>deleteProduct</button>
      </div>
    </>
  );
};

export default Home;
