import React, { useEffect } from "react";
import CMS from "decap-cms-app"; // Import Decap CMS
//import MyTemplate from "./MyTemplate"; // Import your preview template if you have one

const Admin = () => {
  useEffect(() => {
    // Initialize the CMS
    CMS.init({
      backend: {
        name: "github",
        repo: "OlenaKin/Final_project", // Replace with your GitHub username and repository name
        branch: "main", // The branch where the CMS will push content changes
        auth_endpoint: "https://finaleprogetto22.netlify.app/admin", // The callback URL for OAuth
        api_root: "https://api.github.com", // GitHub API endpoint
        login: true, // Enable login
      },
    });

    // Register your preview template (if you have one)
    CMS.registerPreviewTemplate("my-template" /*, MyTemplate.git*/);
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* The CMS interface will be rendered here */}
    </div>
  );
};

export default Admin;
