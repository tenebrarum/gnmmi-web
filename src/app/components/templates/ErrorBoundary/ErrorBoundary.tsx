import React, { Component, PropsWithChildren } from 'react'

export class ErrorBoundary extends Component<PropsWithChildren<{}>> {

  public constructor(props: PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false }
  }

  // @ts-expect-error
  public componentDidCatch(error, errorInfo) { 
    console.log(error, errorInfo)
    this.setState({ hasError: true })
  }

  public render() {
    // @ts-expect-error
    if (this.state.hasError) {  
       return <h1>Something went wrong.</h1>;    }
    return this.props.children; 
  }
}