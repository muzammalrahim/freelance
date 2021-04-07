import React, { Component } from "react";
import { post } from "../../App/pages/helper/api";
export default class Uploading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
    console.log(e.target.files[0]);
  }

  upload(e) {
    e.preventDefault();
    post('api/v1/freelancer_profile/')
    .then((response) => {
      console.log("data: " ,response)
    })
  }

  render() {
    let imgPreview;
    if (this.state.file) {
      imgPreview = (
        <img src={this.state.file} alt="" height="100" width="100" />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form>
              {/* <div className="form-group preview">
               {imgPreview}
               
              </div> */}

              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => this.uploadSingleFile(e)}
                />
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  onClick={(e) => this.uploadSingleFile(e)}
                >
                  <img
                    onChange={(e) => this.uploadSingleFile(e)}
                    src={this.state.file}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "0.4px solid ",
                    }}
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.upload}
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
