import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

export function useSendMail(){
    const { mutate, isSuccess, isError }  = useMutation({
        mutationFn: (data: { email: string }) => {
          return axios.post('https://gxhc2ghwtfzhxeumk4757n4c5y0sttrg.lambda-url.us-east-1.on.aws', data)
        },
        onSuccess: () => {
            toast("Assinatura confirmada! ✅",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "light",
            })
        }
    })

    return {
        isSuccess,
        mutate,
        isError
    }
}