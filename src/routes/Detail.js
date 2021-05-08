import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { name, desc, img, temp, life, origin, altImageUrl } = location.state;
      return (
        <div className="detail-container">
          <img src={(!img || !img.url) ? altImageUrl : img.url} alt="Not Available"/>
          <ul>
            <li>Name: {name}</li>
            <li>Origin: {origin}</li>
            <li>Life Span: {life}</li>
            <li>Temperament: {temp}</li>
            <li>{desc}</li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;