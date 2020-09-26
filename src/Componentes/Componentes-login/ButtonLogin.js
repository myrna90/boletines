import React from "react";
import { Loading} from '../imgs/loading.gif'

const BtnLogin = (props) => {
 const { loading } = props;
  return (
    <div>
      <button className="btn-login btn" disabled={loading}>
      {loading && (
                <img src={Loading}/>
              )}
        Login
      </button>
      
    </div>
  );
};

export default BtnLogin;
