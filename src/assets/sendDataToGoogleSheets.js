import axios from 'axios';

const sendDataToGoogleSheet = async (data) => {
  try {
    const apiKey = '5e03358c986cd1bbed6814bc511f86b129eb182b';
    const spreadsheetId = '114p0T_VbbMRuLqthfSYnGuGBAuiTOBeR-U7Slk9rRsU';
    const sheetName = 'Sheet1'; // Change to your sheet name

    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}:append?key=${apiKey}`;

    const response = await axios.post(apiUrl, {
      values: [data], // assuming 'data' is an array of values
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error sending data to Google Sheet:', error);
  }
};

export default sendDataToGoogleSheet