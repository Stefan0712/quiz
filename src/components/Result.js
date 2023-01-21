const Result = (props) => {
    return ( 
        <div className={`result-body ${props.display}`}>
            <h1>Congrats! You are in {props.result}</h1>
            <p>Aici ar merge o mica descriere despre casa/departamentul respectiv.</p>
            <p>Poate si niste date de contact </p>
            
        </div>
     );
}
 
export default Result;