import img from './error.gif';


const ErrorMessage = () => {
    return (
        //<img src={process.env.PUBLIC_URL + '/error.gif'} /> якшо фотка в папці паблік
        <img alt='Error' src={img} />
    )
}

export default ErrorMessage;