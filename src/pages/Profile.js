import {useContext, useEffect} from "react";
import {GithubContext} from "../context/github/githubContext";
import {Link, useParams} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = (props) => {
    const {name: userName} = useParams();

    const {getUser, getRepos, user, repos, loading} = useContext(GithubContext)

    useEffect(() => {
        getUser(userName);
        getRepos(userName);
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Loading...</p>
    }

    const {
        company,
        name,
        avatar_url,
        location,
        login,
        html_url,
        followers,
        bio,
        blog,
        public_repos,
        public_gists,
        following
    } = user

    return (
        <>
            <Link to="/" className="btn btn-link">Home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {bio && <>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </>}
                            <a href={html_url}
                               className="btn btn-dark"
                               rel="noopener noreferrer"
                               target="_blank">Open profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Username:</strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Company:</strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website:</strong> {blog}
                                </li>}
                            </ul>
                            <div className="badge bg-primary">Followers: {followers}</div>
                            <div className="badge bg-success">Following: {following}</div>
                            <div className="badge bg-info">Repos: {public_repos}</div>
                            <div className="badge bg-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </>
    )
}