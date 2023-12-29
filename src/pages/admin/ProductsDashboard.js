import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { v4 } from "uuid";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

import { imageDb } from "../../configs/FirebaseConfig";
import { firebase } from "../../configs/FirebaseConfig";

const ProductsDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState([]);

  const [uploadProgress, setUploadProgress] = useState(0);

  const [product, setProduct] = useState({
    productName: "",
    productImage: null,
    category: "",
    productDescription: "",
    owner: "",
    ownerPhone: "",
  });

  const uploadImage = async () => {
    try {
      // Tạo một ref tới thư mục chứa ảnh trên Firebase
      const imageRef = ref(imageDb, "images/" + v4());

      // Bắt đầu upload ảnh lên Firebase
      const snapshot = await uploadBytes(imageRef, img);

      // Lấy URL của ảnh vừa upload lên
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Thêm URL vào state để hiển thị ảnh
      setImgUrl((prevImgUrl) => [...prevImgUrl, downloadURL]);

      // Trả về URL của ảnh
      console.log("File available at", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Re-throw lỗi để nó có thể được xử lý bởi hàm gọi
    }
  };

  const SaveImagePost = async () => {
    try {
      // Gọi uploadImage và đợi cho nó hoàn thành trước khi tiếp tục
      const imageUrl = await uploadImage();

      // Sau khi có imageUrl, tiếp tục với việc gửi POST request
      const response = await axios.post(
        "https://cua-hang-thien-nguyen.onrender.com/api/v1/products/add",
        {
          ...product,
          productImage: imageUrl,
        }
      );
      console.log(response.data);
      setShow(false);
    } catch (error) {
      console.error("Error saving image post:", error);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        padding: "10px",
        border: "1px solid blue",
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <h3>Products Dashboard</h3>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="primary" onClick={handleShow}>
            Add Product
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      product.productName = e.target.value;
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Product Description</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control"
                    onChange={(e) => {
                      product.productDescription = e.target.value;
                    }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="">Product Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Product Category</label>
                  <select
                    name=""
                    id=""
                    className="form-control"
                    onChange={(e) => {
                      product.category = e.target.value;
                    }}
                  >
                    <option value="QUANAO">Quần/Áo</option>
                    <option value="GIAYDEP">Giày/Dép</option>
                    <option value="TUI">Túi</option>
                    <option value="KHAC">Khác</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">Người sở hữu</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      product.owner = e.target.value;
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Số Điện Thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      product.ownerPhone = e.target.value;
                    }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <Button className="btn btn-primary" onClick={SaveImagePost}>
                    Add Product
                  </Button>
                </div>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductsDashboard;
