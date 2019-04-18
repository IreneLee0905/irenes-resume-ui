import HttpStatus from './HttpStatus';


export default class WebUtils {


  static fetchResponse(response) {
    let responsePromise;
    if (HttpStatus.NO_CONTENT === response.status) {
      responsePromise = Promise.resolve(response);
    // } else if (HttpStatus.UNAUTHORIZED === response.status) { // session invalid
    //   responsePromise = response.json().then(ajaxResponse => {
    //     ajaxResponse.status = response.status;
    //     AppContextProvider.getStore().dispatch(logout());
    //     AppContextProvider.getStore().dispatch(toggleLoading(false));
    //     return Promise.reject(ajaxResponse);
    //   });
    } else if (HttpStatus.SERVICE_UNAVAILABLE === response.status) { // rpc shutdown
      responsePromise = response.json().then(ajaxResponse => {
        // ajaxResponse.status = response.status;
        // const comments = ajaxResponse.message.comments;
        // const rpcShutdowned = comments.length === 2 ? comments[1].comment
        //   : "RPC";
        // AppContextProvider.getStore().dispatch(showAlert(
        //   [{msg: rpcShutdowned + " 暫時無法服務，請稍後再嘗試", type: MessageType.INFO}]));
        // AppContextProvider.getStore().dispatch(toggleLoading(false));
        return Promise.reject(ajaxResponse);
      });
    } else {
      responsePromise = response.json().then(ajaxResponse => {
        ajaxResponse.status = response.status;
        return Promise.resolve(ajaxResponse);
      });
    }
    return responsePromise;
  }
}