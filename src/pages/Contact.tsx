import { useForm } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit, reset] = useForm(
		import.meta.env.VITE_FORMSPREE_KEY as string,
	);

	const hasErrors = state.errors && state.errors.getFormErrors().length > 0;
	if (hasErrors) {
		console.error("Formspree Errors:", state.errors?.getAllFieldErrors());
	}

	return (
		<div>
			<p className="mb-4">
				If you have any questions or wish to establish contact, please
				initiate transmission using the secure protocol below.
			</p>

			<form
				onSubmit={(e) => {
					handleSubmit(e);
					if (!state.submitting) {
						setTimeout(() => {
							reset();
						}, 5000);
					}
				}}
			>
				{/* Email Field */}
				<div className="mb-2">
					<label
						htmlFor="email"
						className="text-highlight mb-1 block"
					>
						&gt; YOUR EMAIL:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="bg-terminal border-border-shadow ring-highlight w-full border p-1 focus:ring-1 focus:outline-none"
					/>
				</div>

				{/* Message Field */}
				<div className="mb-2">
					<label
						htmlFor="message"
						className="text-highlight mb-1 block"
					>
						&gt; MESSAGE:
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						required
						className="bg-terminal border-border-shadow ring-highlight w-full border p-1 focus:ring-1 focus:outline-none"
					></textarea>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className={`terminal-button w-full p-2 ${
						state.submitting
							? "text-yellow-400"
							: state.succeeded
								? "text-highlight"
								: hasErrors
									? "text-red-500"
									: ""
					}`}
					disabled={state.submitting}
				>
					{state.submitting && "TRANSMITTING..."}
					{state.succeeded && "TRANSMISSION SUCCESSFUL."}
					{hasErrors && !state.submitting && "TRANSMISSION FAILED."}
					{!state.submitting &&
						!state.succeeded &&
						!hasErrors &&
						"> TRANSMIT"}
				</button>
			</form>
		</div>
	);
};

export default Contact;
