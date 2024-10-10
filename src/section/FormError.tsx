

export default function FormError() {
    return <div className="modal" role="dialog" id="form-error">
        <div className="modal-box">
            <h3 className="text-lg font-bold">Thank you for contacting me!</h3>
            <p className="py-4">
                I will get back to you as soon as possible.
            </p>
            <div className="modal-action">
                <a href="#" className="btn">Yay!</a>
            </div>
        </div>
    </div>
}