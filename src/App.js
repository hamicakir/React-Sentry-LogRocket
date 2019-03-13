import React, { Component } from 'react';
import './App.css';
import * as Sentry from '@sentry/browser';


class App extends Component {
    state={
        error: null,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }

    evalClickHandler = () => {
        try {
            const code = "Hi zihni";
            eval(code);
        } catch (e) {
            Sentry.captureException(e);
        }
    }

    rangeClickHandler = () => {
        try
        {
            const b = new Array(-1); //range error
        }
        catch(error)
        {
            Sentry.captureException(error);
        }
    }

    referenceClickHandler = () => {
        try {
            throw new ReferenceError('Hello', 'someFile.js', 10);
        } catch (e) {
            Sentry.captureException(e);
        }
    }

    syntaxClickHandler = () => {
        try {
            eval('hoo bar');
        } catch (e) {
            Sentry.captureException(e);                 // "@Scratchpad/1:2:3\n"
        }
    }

    typeClickHandler = () => {
        try{
            const foo = {
                apple: 5,
                banana: 8
            }
            foo.map(f => f * 5);
        }catch(e){
            Sentry.captureException(e);
        }
    }

    uriClickHandler = () => {
        try{
            decodeURIComponent('%E0%A4%A');
        }catch(e){
            Sentry.captureException(e);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        We love errors..
                    </h1>
                </header>
                <div>
                    <button type="button" onClick={this.evalClickHandler}>Eval Error</button>
                    <button type="button" onClick={this.rangeClickHandler}>Range Error</button>
                    <button type="button" onClick={this.referenceClickHandler}>Reference Error</button>
                    <button type="button" onClick={this.syntaxClickHandler}>Syntax Error</button>
                    <button type="button" onClick={this.typeClickHandler}>Type Error</button>
                    <button type="button" onClick={this.uriClickHandler}>URI Error</button>
                </div>
            </div>
        );
    }
}

export default App;
