import React from "react";
import { Typography } from "@material-ui/core";

interface IProps{
    time: number;
}

const getDoubleTime = (num: number) => num < 10 ? `0${num}` : num;

export default (props: IProps) => {
    const time = new Date(props.time);
    return <Typography variant="caption">{getDoubleTime(time.getHours())}:{getDoubleTime(time.getMinutes())}</Typography>
}