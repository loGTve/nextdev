
export default function List() {
    const goods = ['Tomatoes', 'Pasta', 'Coconut'];
    console.log(goods);
    
    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
            goods.map((element, i) => {
                return (
                    <div className="food" key={i}>
                        <img src={`/food${i}.jpg`} className="food-img"/>
                        <h4>{element} | $40</h4>
                    </div>
                    )
            })
    }
        </div>
    )
}