const parent = document.getElementById('parent');
const h2 = React.createElement('h2', { id: 'child' }, 'welcome to React!');
const root = ReactDOM.createRoot(parent);
const h3 = <h3>Hello</h3>
const phoneData = {
    image: "https://media.istockphoto.com/id/1354142498/photo/iphone-13-pro-max.jpg?s=612x612&w=0&k=20&c=0XRJvG9SClFb7LRbLep6x4aFFfhVwBZiUCLgOYux3BA=",
    model: "iPhone 13 Pro",
    price: "$9",
    description: "Latest iPhone model with advanced camera system and A15 Bionic chip"
};


const mobileDev = <div className="container" style={{
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px"
}}>
    <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "15px"
    }}>
        <div className="image-container">
            <img
                src={phoneData.image}
                alt={phoneData.model}
                style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px"
                }}
            />
        </div>

        <div className="details" style={{
            flex: "1"
        }}>
            <h2 style={{ margin: "0 0 10px 0" }}>{phoneData.model}</h2>
            <p style={{
                fontSize: "24px",
                color: "#2ecc71",
                margin: "10px 0"
            }}>{phoneData.price}</p>
            <p style={{
                color: "#666",
                margin: "10px 0"
            }}>{phoneData.description}</p>
            <button style={{
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s"
            }}>
                Add to Cart
            </button>
        </div>
    </div>
</div>


root.render(mobileDev);
console.log(parent);