import "./App.css";
import ICard from "./component/ICard";
import BookCard from "./component/BookCard";
import StateHandling from "./component/StateHandling";
import ImageManipulation from "./component/ImageManipulation";
function App() {
  console.log("App component rendered");

  const students = [
    {
      name: "Ram",
      age: 20,
      branch: "CSE",
      college: "ABES",
      location: "Ghaziabad",
    },
    {
      name: "Rajveer",
      age: 20,
      branch: "CSE",
      college: "ABES",
      location: "Ghaziabad",
    },
    {
      name: "Pratik",
      age: 20,
      branch: "CSE",
      college: "ABES",
      location: "Ghaziabad",
    },
  ];

 const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
    title: "The Courage to Be Disliked",
    publisher: "Simon & Schuster",
    price: "$45",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UF1000,1000_QL80_.jpg",
    title: "Atomic Habits",
    publisher: "Penguin Random House",
    price: "$30",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    title: "The Subtle Art of Not Giving a F*ck",
    publisher: "HarperOne",
    price: "$25",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
    title: "The Psychology of Money",
    publisher: "Harriman House",
    price: "$40",
  },
];


  return (
    <>
      <div className="idcard-container">
        {students.map((item, index) => (
          <ICard key={index} data={item} />
        ))}
      </div>

      <div className="bookcard-container">
        {books.map((book, index) => (
          <BookCard key={index} data={book} />
        ))}
      </div>
      <StateHandling />
      <ImageManipulation />
    </>
  );
}

export default App;
