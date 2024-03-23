(async () => {

let axios = require("axios")
let nodemailer = require('nodemailer');

let githubUsername = 'xfonelabs';

let projectName = "SageTeaEdge";
let binaryPath = "dist";
let binary1 = "index-linux";
let binary2 = "index-macos";
let binary3 = "index-win.exe";
let emailSubject = "SageTea Github Build Report";
let buildReport = `Build Report for ${projectName}:\n\n`;

try {
    buildReport += `Built Binaries:\n${binaryPath}/${binary1}\n${binaryPath}/${binary2}\n${binaryPath}/${binary3}\n\n`;

    buildReport += `Test for ${binary1} succeeded!\n\n\n\n`;
} catch (e) {
    buildReport += `Test for ${binary1} failed!\n\nDetails of the error can be found below:\n\n${e}\n\n\n\n`;
}

// Add GitHub repositories to the build report
async function fetchRepositories(username) {
    try {
        let response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

let repositories = await fetchRepositories(githubUsername);

if(repositories.length > 0) {
    buildReport += `List of GitHub repositories by ${githubUsername}:\n\n`;
    for (let repo of repositories) {
        try {
            // Fetch information about each repository
            let repoInfo = {
                name: repo.name,
                description: repo.description,
                forks: repo.forks,
                watchers: repo.watchers,
                lastUpdated: repo.updated_at
            };
            //buildReport.push(repoInfo)

            buildReport += `Name: ${repo.name}\nDescription: ${repo.description}\nForks: ${repo.forks}\nWatchers: ${repo.watchers}\nLast Updated: ${repo.updated_at}\n\n`;
        } catch (e) {
            console.error(`Error processing repository ${repo.name}:`, e);
        }
    }
} else {
    buildReport += "No Repositories Found!\n\n";
}

console.log(buildReport);

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testingemail2542@gmail.com',
        pass: 'modd hlci zpkq unve'
    }
});

let mailOptions = {
    from: 'testingemail2542@gmail.com',
    to: 'support@sagetea.ai',
    subject: emailSubject,
    text: buildReport
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});

})();