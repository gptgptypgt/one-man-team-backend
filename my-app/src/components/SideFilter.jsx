import { FILTER_TEMPLATES } from '../data.jsx'

export default function SideFilter({ category }) {
  const Comp = FILTER_TEMPLATES[category] ?? FILTER_TEMPLATES['CPU']
  if (!Comp) return null
  return <Comp />
}
