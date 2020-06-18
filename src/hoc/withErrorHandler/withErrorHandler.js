import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

// - withErrorHandler is like a class factory. It creates these classes.
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null });
      return req;
    });

    resInterceptor = axios.interceptors.response.use(
      res => res,
      error => {
        this.setState({ error: error });
      }
    );

    componentWillUnmount() {
      console.log('ComponentWillUnmount');

      // - This will remove the interceptor when we no longer need it. So, whenever the comoponent unmounts.
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            purchaseHandler={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
