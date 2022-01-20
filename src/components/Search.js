import {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const {show} = useContext(AlertContext);

    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            show('Alert')
        }
    }


    return (
        <div className="form-group mb-3">
            <input type="text"
                   className="form-control"
                   placeholder="Enter user nickname..."
                   onKeyPress={onSubmit}
            />
        </div>
    )
}