import { Modal, Button } from "react-bootstrap"
export default function NewWish(prop) {
    const { show, handleClose, handleOnChange, addNewWish } = prop;
    return (
        <>
            <Modal show={show} onHide={handleClose} className="border border-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Add new wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control mb-2" placeholder="Paste the image link..." autoFocus name="embed" onChange={handleOnChange} />
                    <input type="text" className="form-control mb-2" placeholder="Paste url link" autoFocus name="url" onChange={handleOnChange} />

                    <div className="d-flex gap-2">
                        <input type="text" className="form-control" placeholder="Title" name="title" onChange={handleOnChange} />
                        <input type="text" className="form-control" placeholder="Price" name="price" onChange={handleOnChange} />
                    </div>
                    <textarea name="description" id="" cols="30" rows="10" className="form-control mt-2" placeholder="Description (Optional)" onChange={handleOnChange}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={addNewWish}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}