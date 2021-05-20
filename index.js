function App(){

    const [quotes,setQuotes] =React.useState([]);
    const [randomQuote, setRandomQuote] =React.useState("");
    const [color,setColor] =React.useState("#16a085")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () =>{

        var colors = [
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
          ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
    }

    return(
        <div id="quote-box" style={{backgroundColor: color ,minHeight: "100vh" ,color: color}}>
        <div className="container pt-5 ">
           <div className="jumbotron">
               <div className="card">
                   <div className="card-header">Inspirational Quotes</div>
                   <div className="card-body">
                       {randomQuote ? (
                               <>
                              
                              <h3 className="card-text" id="text">&quot;{randomQuote.text}&quot;</h3>
                              <h5 className="card-title float-right" id="author">-{randomQuote.author || "No author"}</h5>
                              </>
                        ) :(
                               <h2>Loading</h2>
                        )}

                        <div className="row pt-5 ">
                            <button onClick={getNewQuote} style={{backgroundColor: color}} id="new-quote" className="btn btn-primary ml-3 float-right">New Quote</button>
                            <a href="twitter.com/intent/tweet" style={{backgroundColor: color}} id="tweet-quote" target="_blank" className="btn btn-primary"><i className="fab fa-twitter"></i></a>
                            <a href="twitter.com/intent/tweet" style={{backgroundColor: color}} id="social" target="_blank" className="btn btn-primary"> <i className="fab fa-instagram"></i> </a>
                        </div>
                   </div>
               </div>
           </div>
        </div>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));