import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import { getBlogs } from "../services/blogService";


function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const loadBlogs = async () => {

            try {

                const data = await getBlogs();

                console.log("Blog API:", data);

                setBlogs(data);

            } catch (error) {

                console.error(
                    "Failed to load blogs:",
                    error
                );

                setError(
                    "Unable to load blog posts."
                );

            } finally {

                setLoading(false);

            }

        };

        loadBlogs();

    }, []);


    return (
        <main>

            {/* =========================
                BLOG HERO
            ========================== */}

            <section className="section blog-hero">

                <div className="container">

                    <p className="section-eyebrow">
                        BLOG
                    </p>

                    <h1>
                        Ideas, lessons & insights.
                    </h1>

                    <p className="blog-intro">
                        I write about software development,
                        technology, projects, learning, and
                        things I discover along the way.
                    </p>

                </div>

            </section>


            {/* =========================
                BLOG POSTS
            ========================== */}

            <section className="section">

                <div className="container">

                    {loading && (
                        <p>
                            Loading blog posts...
                        </p>
                    )}


                    {!loading && error && (

                        <p className="error-message">
                            {error}
                        </p>

                    )}


                    {!loading &&
                        !error &&
                        blogs.length === 0 && (

                            <p>
                                No blog posts available yet.
                            </p>

                        )}


                    {!loading &&
                        !error &&
                        blogs.length > 0 && (

                            <div className="blog-grid">

                                {blogs.map((blog) => (

                                    <article
                                        className="blog-card"
                                        key={blog.id}
                                    >

                                        {/* IMAGE */}

                                        {blog.image ? (

                                            <div className="blog-image">

                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                />

                                            </div>

                                        ) : (

                                            <div className="blog-image blog-image-placeholder">

                                                <span>
                                                    TB.
                                                </span>

                                            </div>

                                        )}


                                        <div className="blog-card-content">

                                            {/* DATE */}

                                            <div className="blog-meta">

                                                {blog.published_at && (

                                                    <span>

                                                        <Calendar
                                                            size={14}
                                                        />

                                                        {new Date(
                                                            blog.published_at
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                            }
                                                        )}

                                                    </span>

                                                )}

                                            </div>


                                            {/* TITLE */}

                                            <h2>
                                                {blog.title}
                                            </h2>


                                            {/* EXCERPT */}

                                            <p>
                                                {blog.excerpt ||
                                                    blog.content?.slice(
                                                        0,
                                                        150
                                                    )}
                                            </p>


                                            {/* READ MORE */}

                                            <Link
                                                to={`/blog/${blog.id}`}
                                                className="blog-read-more"
                                            >
                                                Read Article

                                                <ArrowRight
                                                    size={17}
                                                />

                                            </Link>

                                        </div>

                                    </article>

                                ))}

                            </div>

                        )}

                </div>

            </section>

        </main>
    );
}


export default Blog;