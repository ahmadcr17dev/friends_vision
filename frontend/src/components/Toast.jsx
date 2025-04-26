import React from "react";
import styled from "styled-components";

const Styledsection = styled.div`
  .custom-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: black;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    text-align: center;
  }

  .toast-content button {
    margin-top: 15px;
    padding: 6px 18px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .toast-content button:hover {
    background: #0056b3;
  }
`;

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <Styledsection>
      <div className="custom-toast">
        <div className="toast-content">
          <p>{message}</p>
          <button onClick={onClose}>OK</button>
        </div>
      </div>
    </Styledsection>
  );
};

export default Toast;
