const Upload = () => {
    const handleSubmit = () => {
        console.log('Submitted');
    }
    return(
        <>
            <div className="upload-form ">
                <div className="heading">
                    <h1 className="text-[#0F172B] text-[1rem] font-[400]">Upload Document</h1>
                    <h3 className="text-[#45556C] text-[1rem] font-[400]">Select Document to upload</h3>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit} method="post"></form>
                </div>
            </div>
        </>
    )
}

export default Upload