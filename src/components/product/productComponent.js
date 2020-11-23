const productComponent = ({data, identifier}) =>{
    console.log(identifier)
    return (
        <div className="product">
            <p>{data.title}</p>
            <div className="amount">
                <p>{identifier}</p>
                <button>-</button>
                <input type="number" name="amount" id="amount" value="0"/>
                <button>+</button>
            </div>
            <button>Check Out</button>
        </div>
    )
}

export default productComponent