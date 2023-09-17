import React, {useState, useEffect} from "react";

export default function App(){
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setImage(data.message)
            setLoading(false)
        }
        )
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    )
}

 
