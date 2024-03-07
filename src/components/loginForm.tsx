const LoginForm = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-black shadow-lg rounded-lg px-8 py-6 w-80 border-2 border-neutral-800">
				<form>
					<div className="mb-4">
						<input
							placeholder="Username"
							className="mt-1 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:neutral-900 focus:border-transparent"
							type="text"
						/>
					</div>
					<div className="mb-4">
						<input
							placeholder="Password"
							className="mt-1 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:neutral-900 focus:border-transparent"
							type="password"
						/>
					</div>
					<button className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-neutral-900 border-2 border-neutral-800">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default LoginForm;
