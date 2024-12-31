import { useEffect, useState } from "react";
import "./Home.css";
import { Circles } from "react-loader-spinner";
import ProductTile from "../../components/product-tile/ProductTile";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
    console.log(data);
    
      setProducts(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) return <div style={{display:'flex',alignItems:'center', justifyContent:'center', height:'50vh'}}>
    <Circles height={'10vh'} width={'10vw'} color="blue"/>
  </div>
  return <div className="home-container">
    {
        products?.length && 
        products.map(product => <ProductTile key={product.id} product={product}/>)
    }
  </div>;
};

export default Home;
