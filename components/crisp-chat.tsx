"use client";

import { useEffect } from 'react'
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f8289275-e922-4e9f-88ca-d0a49849d3fe");
    }, [])
    return null;
}

export default CrispChat
