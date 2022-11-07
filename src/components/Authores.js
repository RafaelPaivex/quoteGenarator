import { useEffect, useState } from "react";

const Authors = ({authors}) => {

    const[dados, setDados] = useState([]);

    useEffect(() =>{
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${authors}`)
        .then(res => res.json())
        .then(data => setDados(data.data))
    }, [authors]);

    return (
        <div className="containerAuthor">
            <div className="titleAuthor">
                <h1>{authors}</h1>
            </div> 
                <div className="cards">
                {dados.map(data => (
                    <div key={data._id}>
                        <div className="contentAuthor">
                            <div className="line"></div>
                            <p>"{data.quoteText}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Authors;