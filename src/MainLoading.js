import React from 'react';
import { Component } from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "./css/bootstrap.min.css";
import * as legoData from "./astronaut-loading.json";
import * as doneData from "./doneloading.json";
import { Dot } from 'react-animated-dots';

const root_path = process.env.REACT_APP_ROOT_PATH;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


class MainLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        done: undefined
        };
    }
    // Bad practice? mayhaps
    componentDidMount() {
        setTimeout(() => {
        fetch(root_path + "/api/fields?start_month=null&start_year=2014&end_month=null&end_year=2014")
            .then(response => response.json())
            .then(json => {
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ done: true });
            }, 1200);
            });
        }, 1200);
    }
    
    render() {
        return (
        <div>            
            {!this.state.done && (
            <div className="App">
                <header className="App-header">
                <FadeIn>
                    <div class="d-flex justify-content-center align-items-center">
                    {!this.state.loading ? (
                        <Lottie options={defaultOptions} height={360} width={360} />
                    ) : (
                        <Lottie options={defaultOptions2} height={360} width={360} />
                    )}
                    </div>
                    <h1>Loading
                        <Dot>.</Dot>
                        <Dot>.</Dot>
                        <Dot>.</Dot>
                    </h1>
                </FadeIn>
                </header>
            </div>
            )
            }
        </div>
        );
    }
}

export default MainLoading;