import React, { Component, ErrorInfo, PropsWithChildren } from 'react'

export class ErrorBoundary extends Component<PropsWithChildren<Record<string, unknown>>, { hasError: boolean }> {
  public constructor(props: PropsWithChildren<Record<string, unknown>>) {
    super(props)
    this.state = { hasError: false }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
    this.setState({ hasError: true })
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
