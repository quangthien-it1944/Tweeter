import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

export default (props: any) => {
    return (
        <Typography variant="caption" className="d-flex align-items-center justify-content-center"><CircularProgress className="loading" /> <span>Đang gửi</span></Typography>
    )
}