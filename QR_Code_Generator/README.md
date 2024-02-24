# QR Code Generation
In this self-learning project, I created a QR code generator using Node.js. Leveraging the power of Node.js, I implemented a simple yet powerful tool that allows users to generate QR codes for various purposes.

**Technologies Used:**
Node.js

npm modules - inquirer, qr-image

**Key Features:**

**User Input with Inquirer**:
Utilizing the inquirer npm module, the application prompts users for input, allowing them to specify the content for the QR code generation. For example, users can input a URL, and the application processes this information for QR code creation.

**QR Code Creation**:
The heart of the project lies in the generation of QR codes. I employed the qr-image npm module to convert user-inputted text, such as a website URL, into a QR code. This process ensures the dynamic and customizable nature of the generated QR codes.

**Image and Text Persistence**:
The application not only generates QR codes but also ensures the persistence of the generated content. The QR code image, created using the qr method of the qr-image package, is saved in PNG format. Simultaneously, the input text is stored in a text file using the fs.writeFile method from Node.js's filesystem, allowing users to keep track of the generated QR codes and their corresponding content.
