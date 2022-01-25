import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext);
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        if (value.trim()) {
            github.search(value.trim());
        } else {
            show('Enter user data')
        }
    }


    return (
        <div className="form-group mb-3">
            <input type="text"
                   value={value}
                   className="form-control"
                   placeholder="Enter user nickname..."
                   onChange={event => setValue(event.target.value)}
                   onKeyPress={onSubmit}
            />
        </div>
    )
}