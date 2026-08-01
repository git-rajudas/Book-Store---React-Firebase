

function Popup({ isOpen, onClose, children, btnText , onSubmit}) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 h-[100%] w-full bg-[rgba(0, 0, 0, 0.5)] flex gap-2 justify-center items-center z-1000" onClick={onClose}>
            <div className="bg-yellow-400 p-[20px] rounded-2xl w-fit text-center shadow-[0 5px 15px rgba(0, 0, 0, 0.3)] " onClick={(e)=> e.stopPropagation()}>
                 {children}
            <button onClick={onSubmit} className="bg-white text-black px-6 py-2 rounded-2xl shadow-[0 5px 15px rgba(0, 0, 0, 0.3)] cursor-pointer">{btnText}</button>
            </div>
        </div>
    )
}

export default Popup
