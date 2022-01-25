import {Link} from "react-router-dom";

export const Card = ({user}) => {
  return (
      <div className="card">
          <img src={user.avatar_url} alt={user.login} className="card-img-top"/>
          <div className="card-body">
              <h5 className="card-title">{user.login}</h5>
              <Link className="btn btn-primary" to={`/profile/${user.login}`}>Open</Link>
          </div>
      </div>
  )
}