"use client"; // Error components must be Client Components
import { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.log("error PAGE: " + error);
		alert(error);
	}, [error]);

	return (
		<div className="p-10">
			<h1 className="text-center text-6xl font-bold">Something went wrong!</h1>
			<h3 className="text-center text-2xl font-bold">error</h3>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
};
export default Error;
