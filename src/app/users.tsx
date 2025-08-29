import { Plus } from 'lucide-react';
import React from 'react'

const Users = () => {
  return (
		<div className="relative ">
			<div className='flex flex-row items-center justify-between'>
				<div className="flex flex-col gap-y-2.5">
					<div className="text-2xl font-semibold">
						<h1>User directory</h1>
					</div>
					<div className="text-[#B3B4B3]">
						<p>Find a list of users below</p>
					</div>
				</div>

        <button className='bg-white text-black flex flex-row items-center gap-x-1.5 rounded-xl py-2.5 px-2'>
          <span><Plus className='text-black' /></span>
          Add new 
        </button>
      </div>
      
      <div>
        
      </div>
		</div>
  );
}

export default Users