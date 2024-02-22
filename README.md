# Backend Developer Technical Plooral

Restfull api project, from the plooral technical challenge.

## Installation

Clone the repository:

```
git clone https://github.com/EmmanoelDan/backend-developer-test/tree/EmmanoelDantas
```

Switch to the "EmmanoelDantas" branch:

```
git checkout -b EmmanoelDantas
```

Make sure you have the latest version:

```
git pull origin EmmanoelDantas
```

Install the dependencies:

```
npm install
```

Copy the .env.example file:

```
cp .env.example .env
```

Fill in and change it with the necessary information

Prisma:

**migrate**
```
npm run migrate
```

**datagenerate**
```
npm run default-data
```

Run:

```
npm run start:dev
```

# Questions

- Discuss scalability solutions for the job moderation feature under high load conditions. Consider that over time the system usage grows significantly, to the point where we will have thousands of jobs published every hour. Consider the API will be able to handle the requests, but the serverless component will be overwhelmed with requests to moderate the jobs. This will affect the database connections and calls to the OpenAI API. How would you handle those issues and what solutions would you implement to mitigate the issues?
  
     **Propose more scalability solutions and improve caching. In addition to implementing a form of rate limiting, thus controlling the request rate.**
 
- Propose a strategy for delivering the job feed globally with sub-millisecond latency. Consider now that we need to provide a low latency endpoint that can serve the job feed content worldwide. Using AWS as a cloud provider, what technologies would you need to use to implement this feature and how would you do it?

     **In addition to the application of serverless and lambda, which help in this process. During these days, studying AWS, I saw a solution called Global Accelerator, which serves to direct user traffic to the nearest CloudFront point of presence.**


# Endpoints

- GET /company
- GET /company/:id
- POST /job
- PUT /job/:job_id/publish
- PUT /job/:job_id
- DELETE /job/:job_id
- PUT /job/:job_id/archived
- GET /feed

# Observações

In comments.md there is more information on decisions and improvements
https://github.com/EmmanoelDan/backend-developer-test/blob/891fde8e5ecb66830bdee214079d98672bbbc70c/COMMENTS.md


