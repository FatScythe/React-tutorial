const Book = ({ id, title, author, img }) => {
  // const { id, title, author, img } = props.book;
  const handleClick = (e) => {
    alert("hello world");
    console.log(e.target);
  };

  function handlePress(name) {
    console.log(`my name is ${name}.`);
  }

  function handleMouseOver(title) {
    // console.log(title);
  }

  return (
    <div
      className='book'
      onMouseOver={() => {
        handleMouseOver(title);
      }}
    >
      <img src={img} alt='book' />
      <h4>
        {title} {id}
      </h4>
      <p>{author}</p>
      <button onClick={() => handlePress(author)}>Press me</button>
      <button onClick={handleClick}>Click here</button>
      {/* <p>{hi}</p> */}
      {/* <p>{children}</p> */}
    </div>
  );
};

export default Book;
