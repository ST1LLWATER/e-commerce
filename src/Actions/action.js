const getData = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "ADD_DATA", payload: json }));
  };
};

export default getData;
