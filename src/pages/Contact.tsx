import { useState } from "react";

const Contact = () => {
	const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");

		// Simulated transmission delay
		setTimeout(() => {
			setStatus("sent");
		}, 1500);
	};

	return (
		<div>
			<h2 className="text-highlight glitch mb-4 text-2xl">
				SECURE CHANNEL
			</h2>
			<p className="mb-4">
				Use the following protocols to establish contact. All
				communications are monitored for security.
			</p>

			<form onSubmit={handleSubmit}>
				{/* Email Field */}
				<div className="mb-2">
					<label htmlFor="email" className="mb-1 block">
						&gt; YOUR EMAIL:
					</label>
					<input
						type="email"
						id="email"
						required
						className="bg-terminal border-border-shadow ring-highlight w-full border p-1 focus:ring-1 focus:outline-none"
					/>
				</div>

				{/* Message Field */}
				<div className="mb-2">
					<label htmlFor="message" className="mb-1 block">
						&gt; MESSAGE:
					</label>
					<textarea
						id="message"
						rows={5}
						required
						className="bg-terminal border-border-shadow ring-highlight w-full border p-1 focus:ring-1 focus:outline-none"
					></textarea>
				</div>

				{/* Submit Button */}
				<button type="submit" className="terminal-button w-full p-2">
					&gt; TRANSMIT
				</button>
			</form>

			{/* Status Message */}
			<div className="mt-2 text-center text-sm">
				{status === "sending" && (
					<span className="text-text-primary">TRANSMITTING...</span>
				)}
				{status === "sent" && (
					<span className="text-highlight">
						TRANSMISSION SUCCESSFUL.
					</span>
				)}
			</div>
		</div>
	);
};

export default Contact;
