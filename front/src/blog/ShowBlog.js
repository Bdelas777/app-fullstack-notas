import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:8000/blogs/";

const CompShowBlogs = () => {
  const [blogs, setBlog] = useState();
  useEffect(() => {
    getBlogs();
  }, [third]);

  // Show Blogs
  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
  };

  // Delete Blogs
  const deleteBlogs = async (id) => {
    axios.delete(`$(URI)$(id)`)
    getBlogs()
  };

  return (
    <div className="container">
        <div className="row">
            <div className="column">
                <table className="table">
                    <thead className="table--title">
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Content
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )

};

export default CompShowBlogs;
