import PackageContext from "./Context"
import Provider from "./Provider"


const Laugh = () => {
    return(
      <div>
        <h1>Laugh</h1>
      </div>
    )
      
}


const Smile = () => {
  
    return(
      <div>
            <PackageContext.Consumer> 
               {

                   (info) => (
                        <div>
                              <h1>Name of Cricketer is :{info.data.name} </h1>
                              <h2>Age of Cricketer is :{info.data.age} </h2>
                              <button onClick={info.updateAge}> Update Sachin Age</button>
                              <h3>Country of Cricketer is :{info.data.country} </h3>
                              <h4>Highest Score of Cricketer is :{info.highestScore} </h4>
                        </div>
                   )

               }
            </PackageContext.Consumer>
      </div>
    )
  
}




const App = () => {
  return(
    <div>
       <Laugh />
       <Provider>
            <Smile />
       </Provider>
       


    </div>
  )
}


export default App