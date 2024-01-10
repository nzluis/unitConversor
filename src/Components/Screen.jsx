
export default function Screen() {
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className="screenContainer">
            <div className="screenTitle">
                <h2>convert</h2>
            </div>
            <div className="displayContainer">
                <div className="displayRow">
                    <div className="selectMeasure">
                        <form action="#">
                            <select name="" id="">
                                <option value="" selected>km &#8594; miles </option>
                                <option value="" >miles &#8594; km </option>
                                <option value="" >feet &#8594; m </option>
                                <option value="" >m &#8594; feet </option>
                                <option value="" >cm &#8594; inches </option>
                                <option value="" >inches &#8594; cm </option>
                            </select>
                        </form>
                        <img src="/public/imgs/exchange-svgrepo-com.svg" alt="exchange_logo" width="15.5px" height="13.5px" />
                    </div>
                    <input placeholder="number here" type="text" name="numberToConvert" onChange={handleChange} />
                </div>
                <div className="displayRow">
                    <img src="/public/imgs/iconmonstr-favorite-6-240.png" alt="likes_logo" width="24px" height="24px" />
                    <p>Result</p>
                </div>
            </div>
        </div>
    )
}
