async function createContact() {
  const apiKey = document.getElementById("apiKey").value.trim();
  const fName = document.getElementById("firstName").value.trim();
  const lName = document.getElementById("lastName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const API_BASE_URL =
    "[https://api.openphone.com/v1/contacts](https://api.openphone.com/v1/contacts)";
}

const data = {
  defaultFields: {
    firstName: fName,
    lastName: lName,
    phoneNumbers: [
      {
        name: "primary", // Required structure
        value: phoneNumber,
      },
    ],
  },
  source: "public-api",
};

try {
  const response = await fetch(API_BASE_URL, {
    method: "POST", // 1. POST calls the above function via HTML button.
    headers: {
      Authorization: apiKey, // 2. Set the Authorization header
      "Content-Type": "application/json", // 3. Set content type
    },
    body: JSON.stringify(data), // 4. Send the data
  });

  if (!response.ok) {
    // Handle non-2xx status codes (e.g., 401, 400, 500)
    const errorData = await response.json();
    throw new Error(errorData.message || `API Error: ${response.status}`);
  }

  // Success: API typically returns the newly created resource object
  const contactData = await response.json();
  // Now you display contactData to the user
} catch (error) {
  // Handle network errors or errors thrown above
  console.log(showMessage(`Failed to create contact: ${error.message}`));
}
