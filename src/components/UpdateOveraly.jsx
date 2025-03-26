export default function UpdateOverlay({ display, setDisplay, handleUpdate, newArticle, setNewArticle }) {

    return (

        <div className={`edit_layout ${display}`}>
            <div className="container_overlay">
                <button className="btn btn-danger close_btn" onClick={() => setDisplay('d-none')}>X</button>
                <div onSubmit={e => handleUpdate(e, newArticle)} className="container">
                    <form className='update-form text-center' action="">
                        <input
                            className="d-block mb-4 w-100 form-control"
                            onChange={(e) => setNewArticle(e.target.value)}
                            value={newArticle}
                            type="text"
                            placeholder="Insert the new title" />
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>

        </div>

    )
}