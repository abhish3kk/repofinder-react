import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useAuthStore } from '../store/authStore'
import { Avatar } from '@chakra-ui/avatar'
import { LogOut, Settings, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Dropdown() {
  const {user} = useAuthStore()
  const { logout } = useAuth()
  return (
    <div className="fixed right-4 top-4 w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-full bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer">
          <Avatar variant={"outline"} name={`${user?.firstname} ${user?.lastname}`} />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-default">
              <User />
              Hi, {user?.firstname}
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer">
              <Settings />
              Settings
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 cursor-pointer" onClick={logout}>
              <LogOut />
              Log Out
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
