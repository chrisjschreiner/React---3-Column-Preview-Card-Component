const Card1 = ({ image, title, description, button }) => {
  return (
    <div className="card1">
      <div className="content">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn btn1">{button}</button>
      </div>
    </div>
  );
};

export default Card1;
