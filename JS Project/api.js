import fetch from "node-fetch";

// ? For testing only — disables TLS certificate validation
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const API_KEY = "my-secret-api"; // replace with your real key if needed
const API_BASE_URL = "https://currency-api-v13r.onrender.com";

async function convertViaMinorUnits(amount, from, to) {
  const response = await fetch(`${API_BASE_URL}/convert/accurate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    body: JSON.stringify({ amount, from, to }),
  });

  const text = await response.text();

  try {
    const data = JSON.parse(text);
    console.log(`${amount} ${from} = ${data.result} ${to} (Accurate via minor units)`);
  } catch (err) {
    console.error("? Failed to parse JSON:", text);
  }
}

(async () => {
  await convertViaMinorUnits("4576", "INR", "USD");
})();