function ListRendering(props) {
    const arr = ["Apple", "Banana", "Cherry", "Watermelon"];

    return (
        <div>
            <h1>Step4. List Rendering</h1>
            <hr/>
            <h5>{arr.map((items)=><li>{items}</li>)}</h5>
        </div>
    );
}

export default ListRendering;