export default function Product(props) {
    return (
        <div className="card">
            <img className="product--image" src={require("../assets/" + `${props.path}`)} alt="product image" />
        </div>
    );
}