import React from 'react'
import Avatar from './avatar'

type Props = {
    name: string;
    gmail: string
}

const UserCard = ({
    name,
    gmail
}: Props) => {
  return (
      <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
              <Avatar
                  src=""
                  alt=''
                  className=''
                  size={30}
              />

              <div className='flex flex-col'>
                  <div>
                    <p>{name}</p>
                  </div>
                  <div>
                      <p>{gmail}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default UserCard