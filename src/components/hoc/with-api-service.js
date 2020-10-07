import React from "react";
import ApiServiceContext from "../api-service-context";

const WithApiService = () => (Wrapped) => {
  return (props) => {
    return (
      <ApiServiceContext.Consumer>
        {(ApiService) => {
          return <Wrapped {...props} ApiService={ApiService} />;
        }}
      </ApiServiceContext.Consumer>
    );
  };
};

export default WithApiService;
