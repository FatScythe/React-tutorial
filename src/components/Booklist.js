import Book from "./Book";
import { Books } from "./Bookdata";
import { greeting } from "../testing/testing";

const Booklist = () => {
  console.log(greeting);
  return (
    <article className='book-list'>
      {Books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
      {/* <Book img={Books[0].img} title={Books[0].title} author={Books[0].author}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        totam culpa nulla sunt cum, iure fuga eum eveniet quis esse ex nihil
        suscipit hic odit deserunt? Aliquid animi reprehenderit tempore!
      </Book>

      <Book
        hi='hi'
        img={Books[1].img}
        title={Books[1].title}
        author={Books[1].author}
      /> */}
    </article>
  );
};

export default Booklist;
