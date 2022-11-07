import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect} from "react";
import { Link } from 'react-router-dom';

export default function Home({authors ,setAuthors}){

  const[dados, setDados] = useState([{}]);
  const[arrowState, setArrowState] = useState(false);

  useEffect(() =>{
      fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(res => res.json())
      .then(data => setDados(data.data))
  }, []);

  const generateQuote = () =>{
    window.location.reload(false);
  }

  const showArrow = () =>{
    setArrowState(true);
  }

  const hideArrow = () =>{
    setArrowState(false)
  }

  useEffect(() =>{
    setAuthors(dados[0].quoteAuthor);
  })

  return(
    <div className="containerDefault">
      <div className="main">
        <div className="content">
          <div className="line"></div>
          <p>{dados[0].quoteText}</p>
        </div>
        <Link to="/author">
          <div className="mainAuthor">
            <div className="author" onMouseEnter={showArrow} onMouseLeave={hideArrow}>
              <div>
                <p>{dados[0].quoteAuthor} {arrowState ? <FontAwesomeIcon icon={faArrowRight}/> : null}</p>
                <div className="quoteType">
                  <p>{dados[0].quoteGenre}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="generate">
          <button onClick={generateQuote}><FontAwesomeIcon icon={faRotate}/> Random</button>
        </div>
      </div>
    </div>
  )

}