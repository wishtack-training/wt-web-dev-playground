
export const Summary = (props) => {
    return <div>
        <div>Capacity: {props.config.capacity}</div>
        <div>Height: {props.config.height}</div>
        <div>Width: {props.config.width}</div>
        <div>Price: {props.config.getPrice()}</div>
    </div>
};
