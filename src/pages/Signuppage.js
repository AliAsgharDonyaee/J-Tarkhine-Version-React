import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import Logo from "../assets/logos/logo.svg";
import { ColorButton } from "../components/ColorButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterValidation = object().shape({
	fullName: string().min(6, "نام شما کمتر از 6 حرف نباید باشد").required("لطفا نام کامل خود را وارد کنید"),
	email: string().required("لطفا ایمیل خود را وارد کنید").email("فرمت ایمیل شما اشتباه است"),
	password: string().min(8, "پسورد نباید کمتر از 8 حرف باشد (a-z,A-Z,0-9,@,#,$)").required("لطفا پسورد را وارد کنید"),
	confirmPassword: string()
		.required("لطفا پسورد خود را دوباره وارد کنید")
		.oneOf([ref("password")], "پسورد شما هم خوانی ندارد"),
});

const Input = ({ name, label, placeholder = "****", ...props }) => {
	const [field, meta] = useField(name);
	return (
		<div className='mb-4'>
			<label className='text-Neutral-Gray-8 Caption-S-M flex justify-between items-center' htmlFor={field.name}>
				{label}
				<ErrorMessage name={field.name} component='div' className='text-Condition-Error Caption-S-M' />
			</label>
			<input
				placeholder={placeholder}
				className={`${
					meta.error && meta.touched ? "border-red-500" : ""
				} border-2 border-Neutral-Gray-4 rounded-1x w-full py-2 px-1 text-Neutral-Gray-8 transition focus:border-Primary`}
				{...field}
				{...props}
			/>
		</div>
	);
};

const Signuppage = () => {
	const navigate = useNavigate();
	const handleSubmit = async (datas) => {
		await axios
			.get("http://localhost:3200/signup")
			.then((res) => {
				let resultDataBase = res.data.some((i) => i.datas.email == datas.email);
				if (resultDataBase) {
					toast.error(`ایمیل قبلا ثبت شده است, لطفا وارد شوید`, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					});
				} else {
					axios
						.post("http://localhost:3200/signup", {
							token: new Date().getMilliseconds(),
							enterTime: new Date().toISOString(),
							datas,
							products: {},
						})
						.then((res) => {
							toast.success(`عزیز با موفقیت ثبت نام کردید ${res.data.datas.fullName}`, {
								position: "top-right",
								autoClose: 3000,
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
						})
						.catch((err) => {
							toast.error(`${err.message}, please run json-servers :)`, {
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "colored",
							});
						});
				}
			})
			.catch((err) => {
				toast.error(`${err.message}, please run json-servers :)`, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
			});
	};

	return (
		<div className='w-screen h-screen'>
			<div className='py-2 px-8 w-full min-h-screen'>
				<div className='mx-auto md:w-1/2 lg:w-1/3 xl:w-1/5'>
					<Formik
						initialValues={{
							fullName: "",
							email: "",
							password: "",
							confirmPassword: "",
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
									<h2 className='mb-3x Caption-3XL-B text-Neutral-Gray-8'>ثبت نام کاربر</h2>
									<Form className='w-full h-auto'>
										<Input name='fullName' label='نام و نام خانوادگی' placeholder='علی اصغر' />
										<Input name='email' label='ایمیل' placeholder='info@email.com' />
										<Input
											name='password'
											label='پسورد (انگلیسی)'
											type='password'
											placeholder='AliAsghar@5951'
										/>
										<Input name='confirmPassword' label='پسورد دوباره (انگلیسی)' type='password' />
										<div className='w-full h-6x flex items-center justify-center'>
											<ColorButton className='w-full h-6x bg-Primary text-white' type='submit'>
												<p className='Caption-L-B'>ثبت نام</p>
											</ColorButton>
										</div>
									</Form>
									<div className='w-full h-6x flex  items-center'>
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

export default Signuppage;
