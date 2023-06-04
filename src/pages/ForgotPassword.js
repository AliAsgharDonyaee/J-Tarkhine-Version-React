import { Formik, Form, useField, ErrorMessage } from "formik";
import { number, object, string } from "yup";
import Logo from "../assets/logos/logo.svg";
import { ColorButton } from "../components/ColorButton";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const RegisterValidation = object().shape({
	email: string().required("لطفا ایمیل خود را وارد کنید").email("فرمت ایمیل شما اشتباه است"),
	fpassword: string().min(8, "رمز ارسالی نباید کمتر از 8 عدد باشد").required("لطفا رمز ارسالی را وارد کنید"),
});

const Input = ({ name, label, ...props }) => {
	const [field, meta] = useField(name);
	return (
		<div className='mb-4'>
			<label className='text-Neutral-Gray-8 Caption-S-M flex justify-between items-center' htmlFor={field.name}>
				{label}
				<ErrorMessage name={field.name} component='div' className='text-Condition-Error Caption-S-M' />
			</label>
			<input
				className={`${
					meta.error && meta.touched ? "border-red-500" : ""
				} border-2 border-Neutral-Gray-4 rounded-1x w-full py-2 px-1 text-Neutral-Gray-8 transition focus:border-Primary`}
				{...field}
				{...props}
			/>
		</div>
	);
};

const ForgotPassword = () => {
	const navigate = useNavigate();
	const handleSubmit = async (datas) => {
		toast.success("رمز شما با موفقیت به ایمیلتان ارسال شد", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
		setInterval(() => {
			navigate("/login");
		}, 3000);
	};

	return (
		<div className='w-screen h-screen'>
			<div className='py-2 px-8 w-full min-h-screen'>
				<div className='mx-auto md:w-1/2 lg:w-1/3 xl:w-1/5'>
					<Formik
						initialValues={{
							email: "",
							fpassword: "",
						}}
						onSubmit={handleSubmit}
						validationSchema={RegisterValidation}
					>
						{() => {
							return (
								<>
									<div className='w-full h-10x  center-items'>
										<img src={Logo} />
									</div>
									<h2 className='mb-3x Caption-2XL-B text-Neutral-Gray-8'>فراموشی رمز عبور</h2>
									<Form className='w-full h-auto'>
										<div className='flex justify-between items-center h-9x'>
											<div className='mb-4x w-[85%] h-6x'>
												<Input name='email' label='ایمیل' placeholder='info@email.com' />
											</div>
											<div className='w-[15%] h-6x flex items-center justify-center'>
												<button className='my-1 mr-1 w-full h-6x bg-Primary rounded-2x text-white'>
													<p className='Caption-L-B'>ارسال</p>
												</button>
											</div>
										</div>
										<Input name='fpassword' label='رمز ارسال شده' placeholder='12345678' />
										<div className='w-full h-6x flex items-center justify-center'>
											<ColorButton className='w-full h-6x bg-Primary text-white' type='submit'>
												<p className='Caption-L-B'>ارسال</p>
											</ColorButton>
										</div>
									</Form>
									<div className='w-full h-6x flex justify-between items-center'>
										<Link to='/signup' className='text-Primary Caption-S-B'>
											حساب کاربری ندارم - ثبت نام میکنم
										</Link>
										<Link to='/login' className='text-Primary Caption-S-B'>
											حساب کاربری دارم - ورود میکنم
										</Link>
									</div>
								</>
							);
						}}
					</Formik>
					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
