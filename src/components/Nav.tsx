import { Link, useParams } from "react-router"
import { useSettingsStore } from "../store/settingStore"

const Nav = () => {
  const { category } = useParams()
  const { topics } = useSettingsStore()

  return (
    <nav className="-mb-0.5 flex justify-center gap-x-6" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
      <Link className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active cursor-pointer ${category === 'favourites'? 'border-blue-600 font-semibold text-blue-600' :'text-gray-500'}`} to={`/favourites`}>Favourites</Link>
      {topics.map(topic => (
        <Link className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active cursor-pointer ${category === topic? 'border-blue-600 font-semibold text-blue-600' :'text-gray-500'}`} key={topic} to={`/${topic}`}>{topic}</Link>
      ))}
    </nav>
  )
}

export default Nav