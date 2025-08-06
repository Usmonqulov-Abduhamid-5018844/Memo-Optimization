import React, { useState } from "react"
import type { Idata } from "../types/Data.interface"

export const useGetvalue = (initialState:Idata) => {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = event.target
        setFormData((prv)=> ({...prv, [name]: value}))
    }
    return {formData, handleChange, setFormData}
}