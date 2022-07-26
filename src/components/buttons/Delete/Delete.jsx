import './Delete.css'

export const Delete = ({action, text}) => {
    return(
        <button className='delete-button' onClick={action}>{text}</button>
    )
}