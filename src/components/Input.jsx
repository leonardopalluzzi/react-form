export default function Input({ newArticle, setNewArticle, handleSubmit }) {
    return (
        <div className="container">
            <form className='insert_form d-flex flex-column my-5' onSubmit={e => handleSubmit(e, newArticle)} action="">
                <input
                    className="col-8"
                    onChange={(e) => setNewArticle(e.target.value)}
                    value={newArticle} type="text"
                    placeholder="Insert the article's title" />
                <button type="submit" className="col-2 btn btn-primary my-3">Add</button>
            </form>
        </div>
    )
}