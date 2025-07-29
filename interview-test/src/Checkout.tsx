import { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts } from "./dataService";
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
  handleTotal,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncQuantity = () => {
    if (quantity <= orderedQuantity) {
      setQuantity((quantity) => quantity + price);
    }
    handleTotal(total + price, true);
  };
  const handleDecQuantity = () => {
    handleTotal(total - price, false);

    if (quantity >= 0) {
      setQuantity((quantity) => quantity - price);
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>${total}</td>
      <td>
        <button className={styles.actionButton} onClick={handleIncQuantity}>
          +
        </button>
        <button className={styles.actionButton} onClick={handleDecQuantity}>
          -
        </button>
      </td>
    </tr>
  );
};

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const handleTotal = (price: number, action) => {
    if (action == true) {
      setTotal((total) => total + price);
    } else {
      setTotal((total) => total - price);
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {/* 
        <LoadingIcon /> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              <>
                {products.map((p) => {
                  return (
                    <Product
                      availableCount={p.availableCount}
                      id={p.id}
                      name={p.name}
                      price={p.price}
                      setTotal={handleTotal}
                    />
                  );
                })}
              </>
            ) : (
              <LoadingIcon />
            )}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: $ </p>
        <p>Total: {total}$ </p>
      </main>
    </div>
  );
};

export default Checkout;
