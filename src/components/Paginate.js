import React from "react";

const Paginate = ({ breedsPerPage, totalBreeds, paginate, currentPage }) => {
  const PageNumber = [];

  // assign page numbers according to length of array and current breeds per page
  for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
    PageNumber.push(i);
  }

  // check if it's current page then set "active" to li class
  const checkClass = (number) => {
      
    return number === currentPage ? "active" : undefined
}
  return (
    <ul className="pagination">
      {PageNumber.map((number) => (
        <li className={checkClass(number)} key={number}>
          
          <a onClick={() => paginate(number)}  href="#!">
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
