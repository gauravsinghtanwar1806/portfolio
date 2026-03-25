const fetch = require('node-fetch') || global.fetch;

async function test() {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "50b01b0f-13e5-45c9-a573-978b1601ce6b",
        email: "test@example.com",
        message: "Hello this is a test from the script",
        subject: "New test message",
        from_name: "Script Tester"
      }),
    });

    const result = await response.json();
    console.log("RESPONSE:", result);
  } catch (error) {
    console.error("ERROR:", error);
  }
}

test();
