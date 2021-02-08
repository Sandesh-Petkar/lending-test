import { POST_LOGIN_ACTION } from "./ActionTypes";

import axios from "axios";

export const postLoginAction = (formData) => {
  console.log("f", formData);
  return (dispatch) => {
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = "https://52.172.46.24:8096/usrmgmt/p2pusers/login"
    axios
      .post("https://52.172.46.24:8096/usrmgmt/p2pusers/login"
        ,
        formData ,
        {
          headers: 
          {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "*"
            
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log("---masterBoards---", data);

        // if (response.data.status === 'SUCCESS') {
        //     dispatch(fetchUsersSuccess(masterBoards))
        // } else {
        //     dispatch(fetchUsersFailure())
        // }
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
};
