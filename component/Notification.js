import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../slices/ui-slice";
function Notification({ type, message }) {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showNotification({ open: false }));
  };
  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notification;
