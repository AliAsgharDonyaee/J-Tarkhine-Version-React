import React from "react";
import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import WideComponents from "../components/WideComponents";

const ProfilePage = () => {
	const auth = useAuthUser();
	return (
		<section className='w-full h-auto'>
			<div className='w-full min-h-screen'>
				<WideComponents>
					{!auth() ? (
						<div className='mt-4x mx-auto w-2/3 md:w-1/3 xl:w-1/5 h-auto'>
							<div className='mb-4 w-full h-6x bg-Primary center-items rounded-2x text-white'>
								<Link to='/login' className='w-full h-full'>
									<p className='Caption-L-B'>ورود کاربر</p>
								</Link>
							</div>
							<div className='mb-4 w-full h-6x border-2 border-Primary center-items rounded-2x text-Primary'>
								<Link to='/signup' className='w-full h-full'>
									<p className='Caption-L-B'>ثبت نام کاربر</p>
								</Link>
							</div>
						</div>
					) : (
						<Profile data={auth()} />
					)}
				</WideComponents>
			</div>
		</section>
	);
};

export default ProfilePage;
