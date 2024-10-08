

export default function Contact() {
    return <>

        <div className="mx-auto card bg-base-200 w-full max-w-sm shrink-0 shadow-gray-400 shadow-xl my-8">
            <form className="card-body"
                action="https://formie.io/form/2845024d-fc14-409d-aaa9-22dcb1e8d0c3"
                method="POST">
                <h2 id="contact" className="card-title text-3xl font-Outfit self-center">Contattami</h2>

                <input name="_redirect" type="hidden" value="https://dariofurlan.com/#form-success" />

                <input name="_redirect_error" type="hidden" value="https://dariofurlan.com/#form-error" />

                <div className="form-control">
                    <label htmlFor="name" className="label">
                        <span className="label-text">Nome</span>
                    </label>
                    <input className="input input-bordered grow" name="name" type="text" placeholder="Mario Rossi" required/>
                </div>

                <div className="form-control">
                    <label htmlFor="email" className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input className="input input-bordered grow" name="email" type="email" placeholder="mario.rossi@example.com" required/>
                </div>

                <div className="form-control">
                    <label htmlFor="message" className="label">
                        <span className="label-text">Messaggio</span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Messaggio"
                        className="textarea textarea-bordered resize-none textarea-sm w-full max-w-xs" required />
                </div>
                <button className="mt-4 btn btn-primary">Conferma</button>
            </form>
        </div>
    </>
}