export default function Book({ book }) {
  console.log("book", book);
  return (
    <li className="student">
      Name: {book.name} Price: {book.price}
    </li>
  );
}
