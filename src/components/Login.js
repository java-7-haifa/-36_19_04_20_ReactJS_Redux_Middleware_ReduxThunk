import React from "react";
import Loading from "./Loading";

const Login = props => {
    let isLoading = false;
    let error = 'error';
    return (
        <>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            <form action="#" className="col-6 mt-5">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Type email"
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Type password"
              />
              <button
                className="btn btn-primary"
                onClick={e => e.preventDefault()}
              >
                Registration
              </button>
              <button
                className="btn btn-success"
                onClick={e => e.preventDefault()}
              >
                Login
              </button>
              {error ? (
                <div className="alert alert-danger mt-4" role="alert">
                  {error}
                </div>
              ) : null}
            </form>
          </div>
        )}
      </>
    );
}

export default Login;