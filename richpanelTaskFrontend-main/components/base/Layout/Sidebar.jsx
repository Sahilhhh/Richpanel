import Logo from "../../icons/logo";
import { People, Chats, Chart, Logout } from "../../icons";
import Link from "next/link";
import { useSession, signOut } from "next-auth/client";
import router from "next/router";

function Sidebar({ active }) {
	const [session, loading] = useSession();
	const setTab = (val) => {
		setActive(val);
	};
	if (!session && !loading) {
		router.push("/");
	}
	return (
		<div className='sidebar bg-primary bg-opacity-95 h-full fixed flex flex-col justify-between'>
			<div>
				<div className='logo p-5'>
					<Logo className='h-8 mx-auto'></Logo>
				</div>
				<div className='menu'>
					<ul>
						<Link href='/dashboard/conversations'>
							<li className={active == "conv" ? "bg-white py-3" : "py-3"}>
								<Chats
									className='h-8 mx-auto p-1'
									fill={active == "conv" ? "black" : "white"}
								/>
							</li>
						</Link>
						<Link href='/dashboard'>
							<li className={active == "users" ? "bg-white py-3" : "py-3"}>
								<People
									className='h-8 mx-auto p-1'
									fill={active == "users" ? "black" : "white"}
								/>
							</li>
						</Link>
						<Link href='/dashboard'>
							<li className={active == "charts" ? "bg-white py-3" : "py-3"}>
								<Chart
									className='h-8 mx-auto p-1'
									fill={active == "charts" ? "black" : "white"}
								/>
							</li>
						</Link>
					</ul>
				</div>
			</div>
			<div className='icons-down'>
				<div className='signout text-center'>
					<button onClick={() => signOut()}>
						<Logout className='h-8' fill='#fff' />
					</button>
				</div>
				<div className='user p-5'>
					<Link href='/profile'>
						<img
							src='https://randomuser.me/api/portraits/men/60.jpg'
							className='h-10 rounded-full mx-auto'
							alt='user'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
