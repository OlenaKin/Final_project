import React, { useEffect } from "react";
import CMS from "decap-cms-app"; // Import Decap CMS

const Admin = () => {
  useEffect(() => {
    // Initialize the CMS
    CMS.init({
      backend: {
        name: "github",
        repo: "OlenaKin/Final_project", // Replace with your GitHub username and repository name
        branch: "main", // The branch where the CMS will push content changes
        auth_endpoint: "http://localhost:3000/admin/#/", // The callback URL for OAuth
        api_root: "https://api.github.com", // GitHub API endpoint
        login: true, // Enable login
      },
    });
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* The CMS interface will be rendered here */}
      <div id="cms-root" />
    </div>
  );
};

export default Admin;
