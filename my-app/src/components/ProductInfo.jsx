export default function ProductInfo({ title, totalText, totalCount }) {
  return (
    <div className="product-info">
      <div>
        <strong data-role="category-title">{title}</strong>{' '}
        <span className="muted">{totalText}<b>{totalCount}</b></span>
      </div>
    </div>
  )
}
