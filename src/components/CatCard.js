import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import CatImage from "./CatImage";
import { Link } from 'react-router-dom'
import M from "materialize-css";
const CatCard = ({ breeds }) => {

  const p = useParams()


  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);




  return (
    <>
      <ul className="pagination">
        {breeds.map((v) => (
          <div className="col s12 m4 l3 " key={v.id}>
            <div className="card hoverable">
              <div className="card-image">
                <CatImage id={v.id} key={v.id} />
                <span className="card-title">{v.name}</span>
                <button
                  data-toggle="modal"
                  data-target="#modal1"
                  className="btn-floating halfway-fab waves-effect waves-light center-align activator yellow darken-4"

                >
                  {" "}
                  info
                </button>
              </div>
              <div className="card-content">
                <p> {v.temperament} </p>
              </div>
              <div className="card-action">
                <a
                  href={v.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
                {v.cfa_url && (
                  <a href={v.cfa_url} target="_blank" rel="noopener noreferrer">
                    CFA{" "}
                  </a>
                )}
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {" "}
                  {v.name}{" "}
                </span>
                <p className="grey-text text-darken-3"> {v.description} </p>
                <Link to={`/details/${v.id}`}

                  className="btn-small yellow darken-3 hoverable"

                >

                  ... more info
                </Link>
              </div>
            </div>

          </div>

        ))}
      </ul>
    </>
  );
};

export default CatCard;
