import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export class PageErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div>
        <h1>This page failed to load</h1>
        <p className="lead">{this.state.error.message}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="/">
            Back to Today
          </a>
        </div>
      </div>
    );
  }
}
