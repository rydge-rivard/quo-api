//UID - US0eaEh5XX
//PID - PN81cOokrb

async function createContact(event) {
  if (event) {
    event.preventDefault();
  }
  const apiKey = document.getElementById("apiKey").value.trim();
  const fName = document.getElementById("firstName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const API_BASE_URL = "http://localhost:8080/proxy/v1/contacts";

  const data = {
    defaultFields: {
      firstName: fName,
      phoneNumbers: [
        {
          name: "primary",
          value: phoneNumber,
        },
      ],
    },
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
    console.log(`API Status Code: ${response.status}`);

    if (!response.ok) {
      console.log(response.status);
      // Handle non-2xx status codes (e.g., 401, 400, 500)
      const errorData = await response.json();
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }

    // Success: API typically returns the newly created resource object
    const contactData = await response.json();
    // Now you display contactData to the user
  } catch (error) {
    // Handle network errors or errors thrown above
    console.log(`Failed: ${error.message}`);
  }
}
