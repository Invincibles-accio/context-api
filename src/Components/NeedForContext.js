

let name = "Abhishek"

const Smile = () => {
  
    return(
      <div>
        <h1>{name} is Smiling</h1>
      </div>
    )
  
}


const Cry = () => {
  
  return(
    <div>
      <h1>{name} is Crying </h1>
      <Smile />
    </div>
  )

}

const Laugh = () => {
  
  return(
    <div>
      <h1>Laugh</h1>
      <Cry />
    </div>
  )

}

const App = () => {
  return(
    <div>
       
      <Laugh />


    </div>
  )
}


export default App