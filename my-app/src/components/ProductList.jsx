export default function ProductList({ rows }) {
  return (
    <div id="productList" className="product-list">
      <div className="rows" id="rows">
        {rows.map((d, idx) => (
          <div className="row" key={idx}>
            <div className="title">{d.t}</div>
            <div className="spec muted">{d.s}</div>
            <div className="price">{d.p}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
