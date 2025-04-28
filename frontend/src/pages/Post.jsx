import React, { useEffect, useState } from "react";
import { BaseURL, get } from "../services/Endpoint";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const [singlepost, setSinglePost] = useState(null);
  //   console.log("singlePost", singlepost);
  useEffect(() => {
    singlePost();
  }, []);
  const singlePost = async () => {
    try {
      const response = await get(`/public/single-post/${id}`);
      const data = response.data;
      setSinglePost(data.Post);
      //   console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container text-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw-bold text-white mb-4 display-4">
              {singlepost && singlepost.title}
            </h1>
            <img
              src={singlepost && `${BaseURL}/temp/${singlepost.image}`}
              alt="Placeholder"
              className="img-fluid mb-4"
              style={{
                borderRadius: "10px",
                maxHeight: "500px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <p className="mb-5">{singlepost && singlepost.description}</p>
            <hr />
            <h3 className="mt-5 mb-4">Leave a comment</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="4"
                  placeholder="write your comment here"
                  required
                ></textarea>
              </div>
            </form>
            <hr />
            <h3 className="mt-5 mb-4">Comments</h3>
            {singlepost &&
              singlepost.comments.map((comment) => {
                return (
                  <div className="bg-secondary p-3 rounded mb-3 d-flex">
                    <img
                      src={`${BaseURL}/temp/${comment.userId.profile}`}
                      alt="Something"
                      className="rounded-circle me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{comment.userId.FullName}</h5>
                      <p className="mb-0"> {comment.comment}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
