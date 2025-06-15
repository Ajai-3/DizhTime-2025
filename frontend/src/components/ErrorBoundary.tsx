//=================================================================================================================
// ERROR BOUNDARY COMPONENT
//=================================================================================================================
// This component catches JavaScript errors anywhere in the child component tree
//=================================================================================================================

import React from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full h-fit max-h-[90vh]">
            {/* Error Card */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="bg-red-600 px-6 py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-xl font-bold text-white">
                      Oops! Something went wrong
                    </h1>
                    <p className="text-red-100 text-sm">
                      DizhTime encountered an unexpected error
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      What happened?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      The application encountered an error and couldn't
                      continue. This might be due to a temporary issue or a bug
                      in the code.
                    </p>
                  </div>

                  {/* Error Details - Scrollable */}
                  <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-4 border border-gray-400 dark:border-gray-600 max-h-96 overflow-auto">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Error Details:
                    </h4>
                    <div className="text-xs text-red-600 dark:text-red-400 font-mono break-all mb-3 ">
                      {this.state.error?.message || "Unknown error occurred"}
                    </div>
                    {this.state.error?.stack && (
                      <details className="mt-2">
                        <summary className="text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-300">
                          Show detailed stack trace
                        </summary>
                        <div className="mt-3 max-h-64 overflow-auto bg-gray-300 dark:bg-gray-800 p-3 rounded border overflow-y-auto h-50">
                          <pre className="text-xs text-gray-700 dark:text-gray-500 whitespace-pre-wrap break-all">
                            {this.state.error.stack}
                          </pre>
                        </div>
                      </details>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => window.location.reload()}
                      className="flex-1 bg-main-color text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Reload Page
                    </button>
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Go Home
                    </button>
                  </div>

                  {/* Help Text */}
                  <div className="text-center pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">
                      If this problem persists, please contact our support team
                      at{" "}
                      <a
                        href="mailto:dizhtime@gmail.com"
                        className="text-main-color hover:text-orange-300"
                      >
                        dizhtime@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DizhTime Branding */}
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold">
                <span className="text-main-color">Dizh</span>
                <span className="text-gray-800 dark:text-white">Time</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Food Delivery Platform
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
