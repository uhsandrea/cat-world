import React from "react";
import Cat from "../components/Cat";

class Home extends React.Component {
  state = {
    isLoading: true,
    cats: [],
    array: []
  };

  getCats = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const cats = await response.json();
    this.setState({ cats, isLoading: false});
  }
  
  componentDidMount() {
    this.getCats();
  }

  render() {
    const { isLoading, cats, array } = this.state;
    console.log(cats);
    return (
      <div className="container">
        {isLoading ? (
          <div className="loading-msg">Page is Loading...</div>
        ) : (
          <div className="cats">
            {cats.map(cat => (
              <Cat key={cat.id} 
                id={cat.id} 
                name={cat.name} 
                desc={cat.description} 
                origin={cat.origin} 
                temp={cat.temperament} 
                life={cat.life_span} 
                img={cat.image}
                wikipedia={cat.wikipedia_url}
                array={array}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;