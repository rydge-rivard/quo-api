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
