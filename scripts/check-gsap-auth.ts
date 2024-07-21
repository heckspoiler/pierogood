// scripts/check-gsap-auth.js
const fs = require('fs');
const dotenv = require('dotenv');

// Load .env.local file
const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

if (!process.env.GSAP_AUTH) {
  console.error('GSAP_AUTH is not set. Please set it in your .env.local file.');
  process.exit(1);
}

// Generate .npmrc file
const npmrcContent = `
always-auth=true
//npm.greensock.com/:_authToken=${process.env.GSAP_AUTH}
@gsap:registry=https://npm.greensock.com
`;

fs.writeFileSync('.npmrc', npmrcContent);
console.log('.npmrc file generated successfully.');
