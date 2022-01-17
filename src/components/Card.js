import {Link} from "react-router-dom";

export const Card = () => {
  return (
      <div className="card">
          <img src={''} alt={''} className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <Link className="btn btn-primary" to={`/profile/name`}>Open</Link>
          </div>
      </div>
  )
}