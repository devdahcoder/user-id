import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorMessageProps {
	message?: string;
	onRetry?: () => void;
	className?: string;
}

const ErrorMessage = ({
	message = "Something went wrong. Please try again.",
	onRetry,
	className = "",
}: ErrorMessageProps) => {
	return (
		<div
			className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
		>
			<AlertCircle className="w-16 h-16 text-red-500 mb-4" />
			<h3 className="text-lg font-semibold text-gray-900 mb-2">
				Oops! Something went wrong
			</h3>
			<p className="text-gray-600 mb-6 max-w-md">{message}</p>
			{onRetry && (
				<button
					onClick={onRetry}
					className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					<RefreshCw className="w-4 h-4" />
					Try Again
				</button>
			)}
		</div>
	);
};

export default ErrorMessage;
