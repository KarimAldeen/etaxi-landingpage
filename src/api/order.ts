import useGetQuery from "./helper/useGetQuery";



export const useGetOrder = (params:any)=>useGetQuery('ORDER' , '/admin/order/get' , params )