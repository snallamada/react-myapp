import './ExpenseItem.css'


const ExpenseItem = (props) => {
  return (
<div >
    <h1 class="travel">{props.title}</h1>
    <h1 class="travel">{props.name1}</h1>
    <h1 class="travel">{props.plane}</h1>
    <h1 class="travel">{props.name2}</h1>
    <h1 class="travel">{props.days}</h1>
    <h1 class="travel">{props.hotelname}</h1>
    <h1 class="travel">{props.days}</h1>
    <h1 class="travel">{props.travelhours}</h1>
    <h1 class="travel">{props.date.toISOString()}</h1>
 </div>
  );
};
export default ExpenseItem;
