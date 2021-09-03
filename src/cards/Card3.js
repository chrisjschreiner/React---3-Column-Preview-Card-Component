const Card3 = ({ image, title, description, button }) => {
  return (
    <div className="card3">
      <div className="content">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn btn3">{button}</button>
      </div>
    </div>
  );
};

export default Card3;
