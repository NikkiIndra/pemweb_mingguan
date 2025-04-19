import React from "react";

const Top = () => {
    function handleMessage() {
        alert("Halaman Top Tobitob")
    }
    return (
        <a href='/' onClick={handleMessage}>
            Halaman Top
        </a>
    )
}
export default Top;