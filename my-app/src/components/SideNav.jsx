export default function SideNav({ categories, value, onChange }) {
  return (
    <aside className="side-nav">
      <h4>부품 선택</h4>
      {categories.map((c) => (
        <button
          key={c}
          className={c === value ? 'is-active' : ''}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </aside>
  )
}
