import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string } from "yup";
import Logo from "../assets/logos/logo.svg";
import { ColorButton } from "../components/ColorButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useSignIn } from "react-auth-kit";

const RegisterValidation = object().shape({
	email: string().required("لطفا ایمیل خود را وارد کنید").email("فرمت ایمیل شما اشتباه است"),
	password: string().min(8, "پسورد نباید کمتر از 8 حرف باشد (a-z,A-Z,0-9,@,#,$)").required("لطفا پسورد را وارد کنید"),
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

const LoginPage = () => {
	const navigate = useNavigate();
	const signIn = useSignIn();
	const handleSubmit = async (datas) => {
		await axios
			.get("http://localhost:3200/signup")
			.then((resp) => {
				let resultDataBase = resp.data.some(
					(i) => i.datas.email == datas.email && i.datas.password == datas.password,
				);
				if (resultDataBase) {
					axios
						.post("http://localhost:3200/login", {
							fullName: resp.data[0]?.datas.fullName,
							token: resp.data[0].token,
							enterTime: resp.data[0].enterTime,
							email: resp.data[0]?.datas?.email,
							password: resp.data[0]?.datas?.password,
							products: {},
						})
						.then((res) => {
							signIn({
								token: res.data.token,
								expiresIn: 3600,
								tokenType: "Bearer",
								authState: [res.data.fullName, res.data.email],
							});
							toast.success(`عزیز با موفقیت وارد حساب کاربری خود شدید  ${res.data?.email}`, {
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
								navigate("/profile");
							}, 3000);
						});
				} else {
					toast.error(`ایمیل یا پسورد اشتباه است`, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
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
							email: "",
							password: "",
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
									<h2 className='mb-3x Caption-2XL-B text-Neutral-Gray-8'> ورود کاربر</h2>
									<Form className='w-full h-auto'>
										<Input name='email' label='ایمیل' placeholder='info@email.com' />
										<Input
											name='password'
											label='پسورد'
											type='password'
											placeholder='AliAsghar@5951'
										/>
										<div className='w-full h-6x flex items-center justify-center'>
											<ColorButton className='w-full h-6x bg-Primary text-white' type='submit'>
												<p className='Caption-L-B'>ورود</p>
											</ColorButton>
										</div>
									</Form>
									<div className='w-full h-6x flex justify-between items-center'>
										<Link to='/signup' className='text-Primary Caption-S-B'>
											حساب کاربری ندارم - ثبت نام میکنم
										</Link>
										<Link to='/forgot-password' className='text-Primary Caption-S-B'>
											رمز را فراموش کردم ?
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

export default LoginPage;
