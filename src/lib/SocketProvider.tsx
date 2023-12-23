
import { Socket, io } from 'socket.io-client';


export const BASE_URL_SOCKET  = 'http://localhost:8002/';
var socket :Socket | null  =  null ;


function InitSocket(){

    if (!socket){
         socket =  io(BASE_URL_SOCKET , {
            transports:['websocket'],
            autoConnect:true,
            query:{
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbF9uYW1lIjoiaWJyYWhpbSBrYXJpbSBlZGRpbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiY291bnRyeV9jb2RlIjoiKzk2MyIsInBob25lIjoiOTUxOTY4OTk0IiwiZmNtX3Rva2VuIjpudWxsLCJwaG9uZV92ZXJmaWNhdGlvbiI6MCwiYXZhdGFyIjoiXC9pbWFnZXNcL2F2YXRhcl9pbWFnZS5wbmciLCJjb2RlIjpudWxsLCJzdGF0dXMiOiJ1bmJsb2NrZWQiLCJibG9ja190aW1lciI6bnVsbCwiZ2VuZGVyIjoiTWFsZSIsIndhbGxldCI6IjEwMDAwMC4wMCIsImNpdHlfaWQiOm51bGwsImNyZWF0ZWRfYXQiOm51bGwsInVwZGF0ZWRfYXQiOm51bGwsImRlbGV0ZWRfYXQiOm51bGwsInJvbGVfdHlwZSI6IlN1cGVyIEFkbWluIiwidHlwZSI6ImFkbWluIiwicm9sZXMiOlt7ImlkIjoxLCJuYW1lIjoiU3VwZXIgQWRtaW4iLCJndWFyZF9uYW1lIjoic2FuY3R1bSIsImNyZWF0ZWRfYXQiOiIyMDIzLTEyLTA0VDEyOjM0OjMyLjAwMDAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMy0xMi0wNFQxMjozNDozMi4wMDAwMDBaIiwicGl2b3QiOnsibW9kZWxfaWQiOjEsInJvbGVfaWQiOjEsIm1vZGVsX3R5cGUiOiJBcHBcXE1vZGVsc1xcVXNlciJ9fV19.nhsVgomnQlm1NAFQvOT0lWnK3SEbXqiv6guj_4ySUJo",
            
            }
         });
    }
}

export const disconnectSocket = ()=>{
    
    socket?.disconnect();
    socket = null;
}
export const getScoket = ()=>{

    InitSocket();
    return socket;
}


