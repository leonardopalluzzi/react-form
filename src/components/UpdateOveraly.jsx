export default function UpdateOverlay({ display, setDisplay, handleUpdate, newArticle, setNewArticle }) {

    return (
        <div className={`edit_layout ${display}`}>
            <button onClick={() => setDisplay('d-none')}>X</button>
            <div onSubmit={e => handleUpdate(e, newArticle)} className="container">
                <form id='update-form' action="">
                    <input onChange={(e) => setNewArticle(e.target.value)} value={newArticle} type="text" />
                    <button type="submit" className="btn btn-primary mx-4">Save</button>
                </form>
            </div>
        </div>
    )
}