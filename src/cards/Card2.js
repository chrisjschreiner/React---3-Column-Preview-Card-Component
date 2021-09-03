const Card2 = ({ image, title, description, button }) => {
  return (
    <div className="card2">
      <div className="content">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn btn2">{button}</button>
      </div>
    </div>
  );
};

export default Card2;
