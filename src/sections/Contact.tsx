

export default function Contact() {
    return <>

        <div className="mx-auto card bg-base-300 w-full max-w-sm shrink-0 shadow-xl">
            <form className="card-body"
                action="https://formie.io/form/2845024d-fc14-409d-aaa9-22dcb1e8d0c3"
                method="POST">
                <h2 id="contact" className="card-title text-3xl font-Outfit">Contattami</h2>

                <input name="_redirect" type="hidden" value="https://dariofurlan.com/#form-success" />

                <input name="_redirect_error" type="hidden" value="https://dariofurlan.com/#form-error" />

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input name="email" type="email" className="grow" placeholder="Email" />
                </label>

                <textarea
                    name="query"
                    placeholder="Bio"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs">

                </textarea>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
}