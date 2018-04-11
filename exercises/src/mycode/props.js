import React from 'react'


let FullName = (props) =>{
  return <div>{props.firstName} {props.lastName}</div>
}

/*let FullName = ({ firstName, lastName }) =>{
  return <div>{firstName} {lastName}</div>
}*/



let FruitList = (props) => {
  return (
    <ul>
      {props.fruits.map((fruit, index) => <li key={fruit}>{fruit}</li>)}
    </ul>
  )
}

let Button = (props) =>{
  let backgroundColor;
  if (props.type === 'success') {
    backgroundColor = 'green'
  } else if (props.type === 'error') {
    backgroundColor = 'red'
  } else {
    backgroundColor = 'white'
  }
  return (
    <button style={
      { backgroundColor, fontSize: 20 }
    }>
      {props.children}
    </button>
  )
}

let PropExamples = () =>{
  return (
    <div>
      <p>Display full name</p>
      <FullName firstName="John" lastName="Doe" />
      <hr />
      <p>Display fruit list</p>
      <FruitList fruits={["Apple", "Mango", "Grapes"]} />
      <hr />
      <p>Implement button that shows different background based on type props</p>
      <p>Green background for type = success</p>
      <Button type='success'>Success button</Button>
      <p>Red background for type = error</p>
      <Button type='error'>Success button</Button>
      <hr />

    </div>
  )
}

export default PropExamples
