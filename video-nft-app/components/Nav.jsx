import React, { useContext, useEffect, useState } from 'react'
import { NearContext } from '@/wallets/near';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav({ onRouteChange }) {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const toggleDropdown = () => {
    setDropdownHidden(!dropdownHidden);
  };
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Disconnect ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel('Connect');
    }
  }, [signedAccountId, wallet]);

  return (
    <div class="fixed z-10 backdrop-blur-sm">
      <section class="relative mx-auto w-screen">

        <nav class="flex justify-between text-white w-screen px-24 md:px-5">
          <div class="xl:px-12 md:px-2 py-6 flex w-full md:justify-between md:items-center">
            <a class="text-3xl font-bold font-heading no-underline text-white">
              Ignitus Networks
            </a>

            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-7 no-underline text-gray-200">
              <li>
                <a onClick={() => onRouteChange("home")}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => onRouteChange("explore")}>
                  All NFTs
                </a>
              </li>
              <li>
                <a onClick={() => onRouteChange("mint")}>
                  Mint NFT
                </a>
              </li>
            </ul>
            <div className="flex justify-end">
              <div class="xl:flex space-x-5 items-center ml-10">
                <button type="button" class="inline-flex items-center justify-center border-[0.5px] p-2 w-22  h-auto text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false" onClick={action}>
                  {label}
                  {/* {account.slice(0, 5) + '...' + account.slice(38, 42)} */}
                </button>
              </div >
              {/* <div class="md:hidden relative">
                <button
                  id="dropdown-button"
                  class="text-gray-200 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <img src={dropDownIcon} alt="Dropdown" class="w-6 h-6 mx-10" />
                </button>
                <ul id="dropdown-menu" class={`absolute ${dropdownHidden ? "hidden" : ""} bg-gray-800 text-gray-200 w-40 mt-2 rounded-lg shadow-lg`} onClick={toggleDropdown}>
                  <Link className=' hover:bg-gray-700 no-underline text-gray-200' as={Link} to="/">
                    <li className='pl-2 pb-1 pt-1'>Home</li>   </Link>
                  <Link className=' hover:bg-gray-700 no-underline text-gray-200' as={Link} to="/all-nft">
                    <li className='pl-2 pb-1'>All SBT</li>   </Link>
                  <Link className=' hover:bg-gray-700 no-underline text-gray-200' as={Link} to="/create">
                    <li className='pl-2 pb-1'>Mint SBT</li>   </Link>
                </ul>
              </div> */}
            </div>
          </div>


        </nav>

      </section>
    </div>
  )
}

export default Nav