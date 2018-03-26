import React from 'react'

let FirstChild = (props) => {
  return (
    <div>{props.children[0]}</div>
  )
}

let List = (props) => {
  return (
    <div>
      {/* {React.Children.map(props.children, (child, i) => [child, <hr />])} */}
      Number of child <b>{ React.Children.count(props.children) }</b>
      {
        props.children.map((child, i)=>{
          return(
            <div>
              {child}
              <hr />
            </div>
          )
        })
      }
      {/* {props.children} */}
    </div>
  )
}

let ChildrenExamples = () => {
  return (
    <div>
      <p>display only first child</p>
      <FirstChild>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </FirstChild>
      <hr />
      <p>display line break after every item in the list</p>
      <List>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </List>
    </div>
  )
}

export default ChildrenExamples
