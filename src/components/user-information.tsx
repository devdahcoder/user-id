import React from 'react'

type Props = {
    type: string;
    details: string;
    icon: React.ReactElement;
}

const UserInformation = ({details, icon, type}: Props) => {
  return (
		<div className="flex flex-row items-start gap-x-3">
			<div className="w-5 h-5">
				{icon}
			</div>

			<div className="flex flex-col items-start gap-y-0.5">
				<div className="text-sm text-[#9CA3AF]">
					<p>{type}</p>
				</div>
				<div className="text-[14px]">
                  <p>{ details}</p>
				</div>
			</div>
		</div>
  );
}

export default UserInformation