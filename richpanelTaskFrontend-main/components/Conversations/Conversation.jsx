import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
	activeConvState,
	conversationState,
	profileState,
} from "../../atoms/atom";
import { sendMessage } from "../../api/sendMessage";
import moment from "moment";
import SenderProfile from "./senderProfile";
import { useSession } from "next-auth/client";
import { setSendConv } from "../../utils/helpers";

const LeftMsg = ({ msg, sender }) => {
	return (
		<li className='left w-1/2 self-start flex items-center space-x-3'>
			<div className='msg w-full flex flex-col space-y-2'>
				<div className='grid grid-cols-11 items-end  justify-end'>
					<div className='sender-img col-span-2 flex justify-start'>
						<img
							src={sender.profile_pic}
							alt='sender-img'
							className='rounded-full h-9'
						/>
					</div>
					<div className=' col-span-9 flex justify-start'>
						<span className='bg-white text  p-4 rounded-lg shadow-md w-max'>
							{msg.msg}
						</span>
					</div>
				</div>
				<div className='date-time text-sm text-left'>
					<span className='font-semibold'>{sender.first_name}</span> -{" "}
					{moment(msg.time).format("MMM D, h.mm a")}
				</div>
			</div>
		</li>
	);
};

const RightMsg = ({ msg, sender }) => {
	return (
		<li className='right w-1/2 self-end flex items-center space-x-3'>
			<div className='msg w-full flex flex-col space-y-2'>
				<div className='grid grid-cols-11 items-end space-x-2 justify-end'>
					<div className=' col-span-9 flex justify-end'>
						<span className='bg-white text  p-4 rounded-lg shadow-md w-max'>
							{msg.msg}
						</span>
					</div>
					<div className='sender-img col-span-2 flex justify-end'>
						<img
							src={sender.image}
							alt='sender-img'
							className='rounded-full h-9'
						/>
					</div>
				</div>
				<div className='date-time text-sm text-right'>
					<span className='font-semibold'>{sender.name}</span> -{" "}
					{moment(msg.time).format("MMM D, h.mm a")}
				</div>
			</div>
		</li>
	);
};

function Conversation({ className }) {
	const [session, loading] = useSession();
	const [convState, setConvState] = useRecoilState(conversationState);
	const [activeConv, setActiveConv] = useRecoilState(activeConvState);
	const profile = useRecoilValue(profileState);
	const [input, setInput] = React.useState("");
	const form = React.useRef();

	React.useEffect(() => {
		setActiveConv((activeConv) => ({
			...convState
				.filter((item) => item.sender_id === activeConv.sender_id)
				.pop(),
		}));
	}, [convState]);

	const sendMsg = async (email, msg, id) => {
		await sendMessage(email, msg, id);
		setConvState((convState) => setSendConv(convState, msg, id));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		sendMsg(session.user.email, e.target[0].value, activeConv.sender_id);
		form.current.reset();
	};

	return (
		<React.Fragment>
			<div className={className + " h-screen bg-red-50 bg-opacity-70 relative"}>
				{Object.keys(activeConv).length > 0 && (
					<React.Fragment>
						<div className='title text-2xl font-semibold border-1 bg-white border-gray-200 py-4 px-6'>
							{activeConv.user.first_name + " " + activeConv.user.last_name}
						</div>
						<div className='chats w-full h-full'>
							<ul className='w-auto flex flex-col p-4 h-5/6 overflow-auto'>
								{activeConv?.messages?.map((item, index) => {
									return item.type === "received" ? (
										<LeftMsg msg={item} key={index} sender={activeConv.user} />
									) : (
										<RightMsg msg={item} key={index} sender={profile} />
									);
								})}
							</ul>
							<form onSubmit={handleSubmit} ref={form}>
								<div className='input w-full absolute bottom-3 px-3 flex space-x-2'>
									<input
										type='text'
										className='w-full border-1 p-3'
										placeholder='Enter Message'
										onSubmit={(e) => (e.target.value = "")}
									/>
									<button
										type='submit'
										defaultValue={input}
										value={input}
										className='border-1 border-solid border-gray-600 rounded-lg px-2 hidden'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</React.Fragment>
				)}
			</div>
			{Object.keys(activeConv).length > 0 ? (
				<SenderProfile className='col-span-3' />
			) : (
				<div className='bg-red-50 bg-opacity-70 col-span-3'></div>
			)}
		</React.Fragment>
	);
}

export default Conversation;
