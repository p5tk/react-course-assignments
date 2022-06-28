import './UserInput.css';

const UserInput = ({changed, username}) => {

    

    return (
        <div className="inputStyle">
            <input onChange={changed} value={username}  />
        </div>
    )
}

export default UserInput;