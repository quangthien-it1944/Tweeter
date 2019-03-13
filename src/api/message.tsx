/**
 * Nguyen Thien Quang
 * Description: Virtual API
 * Keywords: Virtual API for react saga
 */

import { IMessage } from "../actions/messages.action";

const random = () => (Math.floor(Math.random() * 2) + 1 )*100;

let i = 0;
export const addMessageAPI = (data: IMessage) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const s = random();
            if(s > 100 || data.error){
                resolve(data);
            }else{
                reject(false);
            }
        }, random());
    });
}

export const updateMessageAPI = (data: IMessage) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, random());
    });
}

export const deleteMessageAPI = (messageId: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, random());
    });
}

export const deleteMessagesAPI = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, random());
    });
}
