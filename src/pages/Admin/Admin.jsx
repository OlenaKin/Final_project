import React, { useEffect } from "react";
import CMS from "decap-cms-app"; // Import Decap CMS
import { de } from "decap-cms-locales"; // Import German locale

const Admin = () => {
  useEffect(() => {
    // Initialize the CMS with GitHub authentication
    CMS.init({
      backend: {
        name: "github",
        repo: "YourUsername/YourRepoName", // Your GitHub repository
        branch: "main", // The branch where the CMS will push content changes
        auth_endpoint: "/admin", // The callback URL for OAuth
        api_root: "https://api.github.com", // GitHub API endpoint
        login: true, // Enable login
      },
    });

    // Register the German locale
    CMS.registerLocale("de", de);
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* The CMS interface will be rendered here */}
    </div>
  );
};

export default Admin;
