const Upload = ({isOpen, setOpen}) => {
    if(isOpen === false) return null

    const handleSubmit = () => {
        console.log('Submitted');
    }

    const handleCancel = () => {
        setOpen(false);
    }
    return(
        <>
            <div onClick={handleCancel} className="container-upload w-full h-full fixed z-1 left-0 top-0 justify-center overflow-hidden backdrop-blur-sm">
                <div className="upload-form bg-[#fff] flex flex-col mx-auto items-center w-[448px] h-[450px] my-[6.5rem] rounded-[0.88rem] border-[2rem] border-[#fff]">
                    <div className="heading">
                        <h1 className="text-[#0F172B] text-[1rem] font-[400]">Upload Document</h1>
                        <h3 className="text-[#45556C] text-[1rem] font-[400]">Select Document to upload</h3>
                    </div>
                    <div className="form w-[382px] text-start text-[#0A0A0A] flex flex-col gap-[1rem]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]" method="post">
                            <div className="filename flex flex-col">
                                <label htmlFor="filename">File name:</label>
                                <input type="text" name="filename" id="filename" className="w-full h-[2.5rem] bg-[#F3F3F5]"/>
                            </div>
                            <div className="file flex flex-col">
                                <label htmlFor="file">File:</label>
                                <input type="file" name="file" id="" className="w-full h-[2.5rem] bg-[#F3F3F5] text-[0.8rem]"/>
                            </div>
                            <button type="submit" className="bg-[#DBEAFE] w-full h-[2.5rem]">Submit</button>
                        </form>
                            <button type="cancel" onClick={handleCancel} className="bg-[#F6F6F6] w-full h-[2.5rem]">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload