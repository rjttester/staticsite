import React from "react"
import Layout from "../components/layout"

export default() => (
    <Layout>
        <div>
            <h1>Contact Page</h1>
            <p>This is contact page of this website</p>
            <p>
                <a href="mailto:me@example.com">me@example.com</a>
            </p>
            <p>
            <form name="contact" method="POST" netlify action="https://jolly-bohr-723a40.netlify.com/contact/">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
                </form>
            </p>
        </div>
    </Layout>
)