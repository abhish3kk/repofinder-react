import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useAuthStore } from '../store/authStore'
import {Avatar} from '@chakra-ui/avatar'
import { LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Dropdown() {
  const {user} = useAuthStore()
  const { logout } = useAuth()
  
  return (
    <div className="fixed right-4 top-4 w-auto text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-blue-60 dark:text-white shadow-inner focus:outline-none data-[hover]:bg-gray-300 dark:data-[hover]:bg-gray-700 data-[open]:bg-gray-300 dark:data-[open]:bg-gray-700 cursor-pointer">
          <Avatar variant={"outline"} name={`${user?.firstname} ${user?.lastname}`} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none  data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10 dark:data-[focus]:bg-white/10 cursor-default text-gray-800 dark:text-gray-100">
              <UserIcon />
              Hi, {user?.firstname}
            </button>
          </MenuItem>
          <div className="my-1 h-px dark:bg-white/5 bg-gray-800/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10 dark:data-[focus]:bg-white/10 cursor-pointer text-gray-800 dark:text-gray-100">
              <SettingsIcon />
              Settings
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10 dark:data-[focus]:bg-white/10 cursor-pointer text-gray-800 dark:text-gray-100" onClick={logout}>
              <LogOutIcon />
              Log Out
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
