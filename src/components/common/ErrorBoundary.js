import React from "react";

function logErrorToMyService(error, errorInfo){
    console.log("error:", error, errorInfo);
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error){
        return {hasError : true};
    }

    componentDidCatch(error, errorInfo){
        logErrorToMyService(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            if(this.props.errorUI){
                return this.props.errorUI;
            }
            return <h1>Something went wrong.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;