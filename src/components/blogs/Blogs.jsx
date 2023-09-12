import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlock] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlock(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1>Blogs</h1>

        </div>
    );
};

export default Blogs;