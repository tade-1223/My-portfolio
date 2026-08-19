import { useEffect, useState } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getBlog } from "../services/blogService";


function BlogDetails() {

    const { id } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const loadBlog = async () => {

            try {

                const data = await getBlog(id);

                console.log("Blog Details API:", data);

                setBlog(data);

            } catch (error) {

                console.error(
                    "Failed to load blog:",
                    error
                );

                setError(
                    "Unable to load this blog post."
                );

            } finally {

                setLoading(false);

            }

        };

        loadBlog();

    }, [id]);


    if (loading) {

        return (
            <main className="section">

                <div className="container">

                    <p>
                        Loading article...
                    </p>

                </div>

            </main>
        );

    }


    if (error || !blog) {

        return (
            <main className="section">

                <div className="container">

                    <p className="error-message">
                        {error || "Blog post not found."}
                    </p>

                    <Link
                        to="/blog"
                        className="back-link"
                    >
                        <ArrowLeft size={17} />
                        Back to Blog
                    </Link>

                </div>

            </main>
        );

    }


    return (
        <main>

            {/* =========================
                ARTICLE HEADER
            ========================== */}

            <section className="section blog-details-hero">

                <div className="container blog-details-container">

                    <Link
                        to="/blog"
                        className="back-link"
                    >
                        <ArrowLeft size={17} />
                        Back to Blog
                    </Link>


                    <p className="section-eyebrow">
                        BLOG
                    </p>


                    <h1>
                        {blog.title}
                    </h1>


                    <div className="blog-details-meta">

                        {blog.published_at && (

                            <span>

                                <Calendar size={16} />

                                {new Date(
                                    blog.published_at
                                ).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}

                            </span>

                        )}

                    </div>

                </div>

            </section>


            {/* =========================
                ARTICLE IMAGE
            ========================== */}

            {blog.image && (

                <section className="blog-details-image-section">

                    <div className="container blog-details-container">

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="blog-details-image"
                        />

                    </div>

                </section>

            )}


            {/* =========================
                ARTICLE CONTENT
            ========================== */}

            <section className="section">

                <div className="container blog-details-container">

                    <article className="blog-content">

                        {blog.content
                            ?.split("\n")
                            .map((paragraph, index) => (

                                paragraph.trim() && (

                                    <p key={index}>
                                        {paragraph}
                                    </p>

                                )

                            ))}

                    </article>


                    {/* FOOTER */}

                    <div className="blog-details-footer">

                        <Link
                            to="/blog"
                            className="back-link"
                        >
                            <ArrowLeft size={17} />
                            Back to Blog
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}


export default BlogDetails;