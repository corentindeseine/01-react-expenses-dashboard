import "./Card.css"

function Card(props) {
  const classes = 'card ' + props.className
  console.log(props.children)

  return <div className={classes}>{props.children}</div>;
}

export default Card;
