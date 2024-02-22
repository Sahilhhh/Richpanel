import styles from "../styles/Home.module.css";
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { Login } from "../components/icons";

export default function Home() {
	const [session, loading] = useSession();
	const router = useRouter();
	if (session) {
		router.push("/dashboard");
	}
	return (
		<div className={styles.container}>
			<div className='login-title text-3xl mb-2'>
				Welcome to Facebook Helpdesk
			</div>
			<div className='login-subtitle text-xl mb-5 text-gray-500'>
				Please Login to continue.
			</div>
			<button
				onClick={() => {
					signIn("facebook");
				}}
				className='bg-primary text-white p-3 flex space-x-2'>
				<Login className='h-6' fill='#fff' />
				<div>Login with Facebook</div>
			</button>
		</div>
	);
}
