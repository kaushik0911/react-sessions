/*
  here function parameter name dosent matter it could be 'props' or 'params' or 
  any other name
*/
function FunctionalComponentExample(params) {
  return(
    <div>
      <h1>hello functional component {params.name}</h1>
    </div>
  )
}

export default FunctionalComponentExample;