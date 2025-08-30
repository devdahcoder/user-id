import { File, MapPin, Phone, Plus } from 'lucide-react';
import Avatar from '../avatar';
import UserInformation from '../user-information';

type Props = {
	headerText?: string;
	onClose?: () => void;
};
const ModalFrame = ({
	headerText = "Add User Details",
	onClose = () => {},
}: Props) => {
	return (
		<div className="bg-[#1E1E1E] w-[430px] py-5 rounded-2xl">
			<div className="flex flex-col w-11/12 mx-auto my-0 gap-y-14">
				<div className="flex flex-row items-center justify-between">
					<div className="font-bold text-[17px]">
						<p> {headerText}</p>
					</div>

					<button
						onClick={() => onClose()}
						className="text-black flex flex-row items-center justify-center rounded-full w-8 h-8 bg-[#181818]"
					>
						<Plus className="text-white rotate-45" />
					</button>
				</div>

				<div className="flex flex-col gap-y-8">
					<div className="flex flex-col items-center justify-center gap-y-4">
						<Avatar
							src="'https://www.gravatar.com/avatar/'"
							alt=""
							className=""
							size={92}
						/>

						<div className="flex flex-col items-center gap-y-2 ">
							<div className="font-bold text-lg bg-gray-400 px-2 py-0.5">
								<p>James Wilson</p>
							</div>
							<div className="text-sm text-[#BBBBBB]">
								<p>jamie.wilson@example.com</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-y-7">
						<UserInformation
							icon={
								<Phone size={20} className="text-[#3B82F6]" />
							}
							details="+1 (555) 765-4321"
							type="Phone"
						/>
						<UserInformation
							icon={
								<MapPin size={20} className="text-[#3B82F6]" />
							}
							details="Boston, USA"
							type="Location"
						/>
						<UserInformation
							icon={<File size={20} className="text-[#3B82F6]" />}
							details="08/04/1960"
							type="DOB"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalFrame