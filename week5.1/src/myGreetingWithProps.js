import './App.css';

function GreetingElementsWithProps(props){
    return (
        <div className='app'>
            <h1>{props.message}</h1>
        </div>

    );



}

export default GreetingElementsWithProps;