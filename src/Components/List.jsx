export default function List() {
    return (
        <div className="listContainer">
            <h3 className="listTitle">saved</h3>
            <div className="savedResults">
                <div className="resultCard">
                    <p>100 miles &#8594; 160km</p>
                    <img src="/public/imgs/iconmonstr-x-mark-lined-240.png" alt="delete_logo" width="8.57px" height="8.57px" />
                </div>
                <div className="resultCard">
                    <p>100 miles &#8594; 160km</p>
                    <img src="/public/imgs/iconmonstr-x-mark-lined-240.png" alt="delete_logo" width="10px" height="10px" />
                </div>
            </div>
        </div>
    )
}
