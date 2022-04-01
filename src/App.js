import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expences = [
    {
      id: "el1",
      title: "Pattaya",
      date: new Date(2022, 4, 16),
      price: 29,
      days: 3,
      persons: 2,
      name1: "shravan",
      name2: "raja",
      hotelname: "xyz",
      plane: "Astrian",
      travelhours: "8",
    },
    {
      id: "el2",
      title: "Bankok",
      date: new Date(2022, 4, 19),
      price: 25,
      days: 3,
      persons: 2,
      name1: "shravan",
      name2: "raja",
      hotelname: "xyz",
      plane: "Air Asia",
      travelhours: "2",
    },
    {
      id: "el3",
      title: "Kaulalampur",
      date: new Date(2022, 4, 21),
      price: 25,
      days: 3,
      persons: 2,
      name1: "shravan",
      name2: "raja",
      hotelname: "xyz",
      plane: "Air Asia",
      travelhours: "2",
    },
    {
      id: "el4",
      title: "Bali",
      date: new Date(2022, 4, 24),
      price: 25,
      days: 3,
      persons: 2,
      name1: "shravan",
      name2: "raja",
      hotelname: "xyz",
      plane: "Air Asia",
      travelhours: "2",
    },
  ];

  return (
    <div>
      <h1>Hey shravan lets start your first project</h1>
      <ExpenseItem
        title={expences[0].title}
        date={expences[0].date}
        price={expences[0].price}
        days={expences[0].days}
        name1={expences[0].name1}
        name2={expences[0].name2}
        hotelname={expences[0].hotelname}
        plane={expences[0].plane}
        travelhours={expences[0].travelhours}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[1].title}
        date={expences[1].date}
        price={expences[1].price}
        days={expences[1].days}
        name1={expences[1].name1}
        name2={expences[1].name2}
        hotelname={expences[1].hotelname}
        plane={expences[1].plane}
        travelhours={expences[1].travelhours}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[2].title}
        date={expences[2].date}
        price={expences[2].price}
        days={expences[2].days}
        name1={expences[2].name1}
        name2={expences[2].name2}
        hotelname={expences[2].hotelname}
        plane={expences[2].plane}
        travelhours={expences[2].travelhours}
      ></ExpenseItem>
      <ExpenseItem
        title={expences[3].title}
        date={expences[3].date}
        price={expences[3].price}
        days={expences[3].days}
        name1={expences[3].name1}
        name2={expences[3].name2}
        hotelname={expences[3].hotelname}
        plane={expences[3].plane}
        travelhours={expences[3].travelhours}
      ></ExpenseItem>
    </div>
  );
}

export default App;
