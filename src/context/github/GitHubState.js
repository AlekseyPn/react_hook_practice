import {GithubContext} from "./githubContext";
import {useReducer} from "react";
import {githubReducer} from "./githubReducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../action-types";
import axios from "axios"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCreds = url => `${url}client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}`

export const GitHubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const search = async (value) => {
        setLoading();
        const {data} = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`))


        dispatch({
            type: SEARCH_USERS,
            payload: data.items,
        })
    }

    const getUser = async (name) => {
        setLoading()
        const {data} = await axios.get(withCreds(`https://api.github.com/users/${name}?`))
        dispatch({
            type: GET_USER,
            payload: data,
        })
    }

    const getRepos = async (name) => {
        setLoading()
        const {data} = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`))

        dispatch({type: GET_REPOS, payload: data})
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING})
    }

    const {user, users, repos, loading} = state;

    return <GithubContext.Provider value={{
        setLoading,
        search,
        getUser,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading
    }}>{children}</GithubContext.Provider>
}