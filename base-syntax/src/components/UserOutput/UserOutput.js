const UserOutput = ({username}) => {

    const style = {
        border: '2px solid red',
        fontSize: '20px',
        margin: 'auto',
        textAlign: 'center',
        width: '20%'
    }

    return (
        <div>
            <p style={style}> Username :  {username} </p>

        </div>
    )
}

export default UserOutput;